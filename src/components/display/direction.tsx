"use client"

"use client"

import * as React from "react"
import { DirectionProvider as RadixDirectionProvider, useDirection as useRadixDirection } from "@radix-ui/react-direction"

function DirectionProvider({
  dir,
  children,
}: { dir: "ltr" | "rtl"; children: React.ReactNode }) {
  return (
    <RadixDirectionProvider dir={dir}>
      {children}
    </RadixDirectionProvider>
  )
}

const useDirection = useRadixDirection

export { DirectionProvider, useDirection }
