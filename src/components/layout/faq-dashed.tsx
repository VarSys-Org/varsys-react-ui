"use client"

import * as React from "react"

import { cn } from "@/lib/cn"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/navigation/accordion"

export interface FaqDashedItem {
  /** Question text. */
  question: string
  /** Answer text rendered as the expandable content. */
  answer: React.ReactNode
}

export interface FaqDashedProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** FAQ items to display. */
  items: FaqDashedItem[]
  /** Heading shown above the FAQ list. */
  title?: React.ReactNode
  /** Supporting description shown under the heading. */
  description?: React.ReactNode
  /** Text shown in the left-hand helper column. */
  helperText?: React.ReactNode
  /** Link/action rendered in the helper column. */
  helperAction?: React.ReactNode
}

export function FaqDashed({
  items,
  title = "Frequently asked questions",
  description = "Everything you need to know about the product and billing.",
  helperText = "Can't find what you're looking for?",
  helperAction,
  className,
  ...props
}: FaqDashedProps) {
  return (
    <section
      data-slot="faq-dashed"
      className={cn(
        "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
        className,
      )}
      {...props}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mt-8 border-t border-dashed border-border pt-6">
            {helperText && (
              <p className="text-sm text-muted-foreground">{helperText}</p>
            )}
            {helperAction}
          </div>
        </div>

        <Accordion className="w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-b border-dashed border-border not-last:border-b"
            >
              <AccordionTrigger className="group/faq py-4 text-base">
                <span className="mr-3 inline-flex w-8 shrink-0 font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pl-11 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqDashed