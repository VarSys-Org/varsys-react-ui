"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AuthorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  name: string
  readTime: string
  title: string
  description: string
}

export function AuthorCard({
  image,
  name,
  readTime,
  title,
  description,
  className,
  ...props
}: AuthorCardProps) {
  return (
    <div className={cn("w-full max-w-xs", className)} {...props}>
      <div
        className={cn(
          "group/card relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md bg-cover p-4 shadow-xl",
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60 transition duration-300 group-hover/card:bg-black" />
        <div className="relative z-10 flex flex-row items-center space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-muted text-sm font-semibold text-foreground">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              {name}
            </p>
            <p className="text-sm text-gray-400">{readTime}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            {title}
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
