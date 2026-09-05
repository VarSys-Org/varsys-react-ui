"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/navigation/accordion"

import { cn } from "@/lib/cn"

export interface SettingsAccordionItem {
  id: string
  title: string
  sub?: string
  content: string
}

export interface SettingsAccordionProps {
  items: SettingsAccordionItem[]
  defaultValue?: string
  className?: string
}

export function SettingsAccordion({
  items,
  defaultValue,
  className,
}: SettingsAccordionProps) {
  return (
    <Accordion
      className={cn("w-full", className)}
      defaultValue={defaultValue ? [defaultValue] : undefined}
    >
      {items.map((item) => (
        <AccordionItem className="py-2" key={item.id} value={item.id}>
          <AccordionTrigger className="py-2 text-left font-semibold text-[15px] leading-6">
            <span className="flex flex-col space-y-1">
              <span>{item.title}</span>
              {item.sub ? (
                <span className="font-normal text-sm">{item.sub}</span>
              ) : null}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-2 text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}