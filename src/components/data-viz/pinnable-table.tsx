"use client"

import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  EllipsisIcon,
  PinOffIcon,
} from "lucide-react"
import { type CSSProperties, useState } from "react"

import { Button } from "@/components/buttons/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/display/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/navigation/dropdown-menu"

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: number
  department: string
  role: string
  joinDate: string
  lastActive: string
  performance: "Good" | "Very Good" | "Excellent" | "Outstanding"
}

const initialData: Item[] = [
  {
    id: "1",
    name: "Hannah Kandell",
    email: "hannah@acme.dev",
    location: "San Francisco",
    flag: "🇺🇸",
    status: "Active",
    balance: 1284.5,
    department: "Engineering",
    role: "Staff Engineer",
    joinDate: "2021-03-14",
    lastActive: "2026-09-01",
    performance: "Outstanding",
  },
  {
    id: "2",
    name: "Chris Tompson",
    email: "chris@acme.dev",
    location: "London",
    flag: "🇬🇧",
    status: "Active",
    balance: 834.25,
    department: "Design",
    role: "Product Designer",
    joinDate: "2022-07-02",
    lastActive: "2026-08-30",
    performance: "Excellent",
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@acme.dev",
    location: "Berlin",
    flag: "🇩🇪",
    status: "Pending",
    balance: 240.75,
    department: "Engineering",
    role: "Frontend Engineer",
    joinDate: "2023-01-20",
    lastActive: "2026-08-28",
    performance: "Very Good",
  },
  {
    id: "4",
    name: "Liam Nguyen",
    email: "liam@acme.dev",
    location: "Singapore",
    flag: "🇸🇬",
    status: "Active",
    balance: 4521.0,
    department: "Product",
    role: "Product Manager",
    joinDate: "2020-11-09",
    lastActive: "2026-09-01",
    performance: "Outstanding",
  },
  {
    id: "5",
    name: "Sofia Rossi",
    email: "sofia@acme.dev",
    location: "Milan",
    flag: "🇮🇹",
    status: "Inactive",
    balance: 0,
    department: "Marketing",
    role: "Growth Lead",
    joinDate: "2022-05-17",
    lastActive: "2026-06-12",
    performance: "Good",
  },
  {
    id: "6",
    name: "Noah Patel",
    email: "noah@acme.dev",
    location: "Toronto",
    flag: "🇨🇦",
    status: "Active",
    balance: 1920.4,
    department: "Engineering",
    role: "Backend Engineer",
    joinDate: "2023-09-05",
    lastActive: "2026-08-31",
    performance: "Very Good",
  },
]

// Helper function to compute pinning styles for columns
const getPinningStyles = (column: Column<Item>): CSSProperties => {
  const isPinned = column.getIsPinned()
  return {
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    position: isPinned ? "sticky" : "relative",
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="truncate font-medium">{row.getValue("name")}</div>
    ),
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="truncate">
        <span className="text-lg leading-none">{row.original.flag}</span>{" "}
        {row.getValue("location")}
      </div>
    ),
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("balance"))
      const formatted = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
      }).format(amount)
      return formatted
    },
    header: "Balance",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
  },
  {
    accessorKey: "performance",
    header: "Performance",
  },
]

function PinnableTable() {
  const [data] = useState<Item[]>(initialData)
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    columnResizeMode: "onChange",
    columns,
    data,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div>
      <Table
        className="table-fixed border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-border [&_th]:border-b [&_tr:not(:last-child)_td]:border-b [&_tr]:border-none"
        style={{
          width: table.getTotalSize(),
        }}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="bg-muted/50" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const { column } = header
                const isPinned = column.getIsPinned()
                const isLastLeftPinned =
                  isPinned === "left" && column.getIsLastColumn("left")
                const isFirstRightPinned =
                  isPinned === "right" && column.getIsFirstColumn("right")

                return (
                  <TableHead
                    className="relative h-10 truncate border-t data-pinned:bg-muted/90 data-pinned:backdrop-blur-xs [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:border-r [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:border-l [&[data-pinned][data-last-col]]:border-border"
                    colSpan={header.colSpan}
                    data-last-col={
                      isLastLeftPinned
                        ? "left"
                        : isFirstRightPinned
                          ? "right"
                          : undefined
                    }
                    data-pinned={isPinned || undefined}
                    key={header.id}
                    style={{ ...getPinningStyles(column) }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </span>
                      {/* Pin/Unpin column controls with enhanced accessibility */}
                      {!header.isPlaceholder &&
                        header.column.getCanPin() &&
                        (header.column.getIsPinned() ? (
                          <Button
                            aria-label={`Unpin ${header.column.columnDef.header as string} column`}
                            className="-mr-1 size-7 shadow-none"
                            onClick={() => header.column.pin(false)}
                            size="icon"
                            title={`Unpin ${header.column.columnDef.header as string} column`}
                            variant="ghost"
                          >
                            <PinOffIcon
                              aria-hidden="true"
                              className="opacity-60"
                              size={16}
                            />
                          </Button>
                        ) : (
                          <DropdownMenu>
                            <DropdownMenuTrigger
                              render={
                                <Button
                                  aria-label={`Pin options for ${header.column.columnDef.header as string} column`}
                                  className="-mr-1 size-7 shadow-none"
                                  size="icon"
                                  title={`Pin options for ${header.column.columnDef.header as string} column`}
                                  variant="ghost"
                                />
                              }
                            >
                              <EllipsisIcon
                                aria-hidden="true"
                                className="opacity-60"
                                size={16}
                              />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => header.column.pin("left")}
                              >
                                <ArrowLeftToLineIcon
                                  aria-hidden="true"
                                  className="opacity-60"
                                  size={16}
                                />
                                Stick to left
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => header.column.pin("right")}
                              >
                                <ArrowRightToLineIcon
                                  aria-hidden="true"
                                  className="opacity-60"
                                  size={16}
                                />
                                Stick to right
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ))}
                      {header.column.getCanResize() && (
                        <div
                          {...{
                            className:
                              "absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:-translate-x-px",
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                          }}
                        />
                      )}
                    </div>
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell
                  const isPinned = column.getIsPinned()
                  const isLastLeftPinned =
                    isPinned === "left" && column.getIsLastColumn("left")
                  const isFirstRightPinned =
                    isPinned === "right" && column.getIsFirstColumn("right")

                  return (
                    <TableCell
                      className="truncate data-pinned:bg-background/90 data-pinned:backdrop-blur-xs [&[data-pinned=left][data-last-col=left]]:border-r [&[data-pinned=right][data-last-col=right]]:border-l [&[data-pinned][data-last-col]]:border-border"
                      data-last-col={
                        isLastLeftPinned
                          ? "left"
                          : isFirstRightPinned
                            ? "right"
                            : undefined
                      }
                      data-pinned={isPinned || undefined}
                      key={cell.id}
                      style={{ ...getPinningStyles(column) }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <p className="mt-4 text-center text-muted-foreground text-sm">
        Pinnable columns made with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://tanstack.com/table"
          rel="noopener noreferrer"
          target="_blank"
        >
          TanStack Table
        </a>
      </p>
    </div>
  )
}

export { PinnableTable }