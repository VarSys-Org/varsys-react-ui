"use client"

import * as React from "react"
import { parseISO, isAfter, isBefore } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { type DateRange } from "react-day-picker"
import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import { Calendar } from "@/components/forms/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/display/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/data-viz/chart"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/overlays/popover"

export interface ChartFilterProps extends Omit<React.ComponentProps<"div">, "title"> {
  data: Array<Record<string, unknown>>
  indexKey?: string
  valueKey?: string
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  valueFormatter?: (value: number) => string
  labelFormatter?: (value: string) => string
  range?: DateRange
  onRangeChange?: (range: DateRange | undefined) => void
  minDate?: Date
  maxDate?: Date
  color?: string
  height?: number
}

const defaultValueFormatter = (value: number) => value.toLocaleString()

const defaultLabelFormatter = (value: string) =>
  new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

function parseDateKey(value: unknown, indexKey: string): Date | undefined {
  if (value instanceof Date) return value
  if (typeof value === "string") {
    const parsed = parseISO(value)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed
  }
  if (typeof value === "number") return new Date(value)
  return undefined
}

export function ChartFilter({
  data = [],
  indexKey = "date",
  valueKey = "value",
  title,
  description,
  footer,
  valueFormatter = defaultValueFormatter,
  labelFormatter = defaultLabelFormatter,
  range,
  onRangeChange,
  minDate,
  maxDate,
  color = "var(--color-primary)",
  height = 250,
  className,
  ...props
}: ChartFilterProps) {
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    range,
  )

  const activeRange = range ?? internalRange

  const filteredData = React.useMemo(() => {
    if (!activeRange?.from && !activeRange?.to) return data
    return data.filter((item) => {
      const date = parseDateKey(item[indexKey], indexKey)
      if (!date) return true
      if (activeRange.from && isBefore(date, activeRange.from)) return false
      if (activeRange.to && isAfter(date, activeRange.to)) return false
      return true
    })
  }, [data, activeRange, indexKey])

  const chartConfig = {
    [valueKey]: {
      label: valueKey,
      color,
    },
  } satisfies ChartConfig

  const handleRangeChange = (next: DateRange | undefined) => {
    setInternalRange(next)
    onRangeChange?.(next)
  }

  const rangeLabel =
    activeRange?.from && activeRange?.to
      ? `${activeRange.from.toLocaleDateString()} – ${activeRange.to.toLocaleDateString()}`
      : undefined

  return (
    <Card className={cn("w-full max-w-xl", className)} {...props}>
      <CardHeader className="grid border-b">
        {title ? <CardTitle>{title}</CardTitle> : null}
        {description ? <CardDescription>{description}</CardDescription> : null}
        <CardAction className="mt-2">
          <Popover>
            <PopoverTrigger
              render={
                <Button type="button" variant="outline" className="whitespace-nowrap">
                  <CalendarIcon />
                  {rangeLabel ?? "All time"}
                </Button>
              }
            />
            <PopoverContent className="w-auto overflow-hidden p-0" align="end">
              <Calendar
                mode="range"
                defaultMonth={activeRange?.from}
                selected={activeRange}
                onSelect={handleRangeChange}
                disabled={[
                  ...(minDate ? [{ before: minDate }] : []),
                  ...(maxDate ? [{ after: maxDate }] : []),
                ]}
              />
            </PopoverContent>
          </Popover>
        </CardAction>
      </CardHeader>
      <CardContent className="px-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto w-full"
          style={{ height }}
        >
          <BarChart
            accessibilityLayer
            data={filteredData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={indexKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={20}
              tickFormatter={(value: string) => {
                const date = parseDateKey(value, indexKey)
                return date
                  ? date.toLocaleDateString(undefined, { day: "numeric" })
                  : value
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={valueKey}
                  labelFormatter={labelFormatter}
                  formatter={(value) => valueFormatter(Number(value))}
                />
              }
            />
            <Bar dataKey={valueKey} fill={`var(--color-${valueKey})`} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {footer ? <CardFooter className="border-t">{footer}</CardFooter> : null}
    </Card>
  )
}