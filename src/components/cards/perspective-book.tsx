"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export type PerspectiveBookSize = "sm" | "default" | "lg"

const sizeMap: Record<PerspectiveBookSize, { width: string; spineTranslation: string }> = {
  sm: { width: "150px", spineTranslation: "122px" },
  default: { width: "196px", spineTranslation: "168px" },
  lg: { width: "300px", spineTranslation: "272px" },
}

const paperTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")"

export interface PerspectiveBookProps {
  size?: PerspectiveBookSize
  className?: string
  children: React.ReactNode
  textured?: boolean
}

export function PerspectiveBook({
  size = "default",
  className = "",
  children,
  textured = false,
}: PerspectiveBookProps) {
  const defaultColorClasses =
    'bg-neutral-100 text-primary dark:bg-[#1f1f1f] dark:before:absolute dark:before:inset-0 dark:before:rounded-[inherit] dark:before:bg-gradient-to-b dark:before:from-[#ffffff1a] dark:before:to-transparent dark:before:content-[""]'

  return (
    <div className="group z-10 h-min w-min [perspective:900px]">
      <div
        style={{
          width: sizeMap[size].width,
          borderRadius: "6px 4px 4px 6px",
        }}
        className="relative aspect-[49/60] transition-transform duration-300 ease-out [transform:rotateY(0deg)] [transform-style:preserve-3d] group-hover:-translate-x-1 group-hover:scale-[1.066] group-hover:[transform:rotateY(-20deg)]"
      >
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex size-full flex-col overflow-hidden p-[12%] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-solid after:border-[#00000014] after:shadow-[0_1.8px_3.6px_#0000000d,_0_10.8px_21.6px_#00000014,_inset_0_-.9px_#0000001a,_inset_0_1.8px_1.8px_#ffffff1a,_inset_3.6px_0_3.6px_#0000001a]",
            className || defaultColorClasses,
          )}
          style={{
            transform: "translateZ(25px)",
            borderRadius: "6px 4px 4px 6px",
          }}
        >
          <div
            className="absolute left-0 top-0 h-full opacity-40"
            style={{
              minWidth: "8.2%",
              background:
                "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 12%, hsla(0, 0%, 100%, .25) 29.25%, hsla(0, 0%, 100%, 0) 50.5%, hsla(0, 0%, 100%, 0) 75.25%, hsla(0, 0%, 100%, .25) 91%, hsla(0, 0%, 100%, 0)), linear-gradient(90deg, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1) 12%, transparent 30%, rgba(0, 0, 0, .02) 50%, rgba(0, 0, 0, .2) 73.5%, rgba(0, 0, 0, .5) 75.25%, rgba(0, 0, 0, .15) 85.25%, transparent)",
            }}
          />
          <div className="h-full pl-1">{children}</div>
          {textured && (
            <div
              className="pointer-events-none absolute inset-0 rotate-180 bg-cover bg-no-repeat opacity-50 brightness-110 mix-blend-hard-light"
              style={{
                borderRadius: "6px 4px 4px 6px",
                backgroundImage: paperTexture,
              }}
            />
          )}
        </div>

        <div
          className="absolute left-0 bg-[linear-gradient(90deg,#eaeaea_0%,#0000_80%),linear-gradient(#fff,#fafafa)]"
          style={{
            top: "3px",
            bottom: "3px",
            width: "48px",
            transform: `translateX(${sizeMap[size].spineTranslation}) rotateY(90deg)`,
          }}
        />

        <div
          className={cn(
            "absolute inset-y-0 left-0 flex size-full flex-col justify-end overflow-hidden p-[12%]",
            className || defaultColorClasses,
          )}
          style={{
            transform: "translateZ(-25px)",
            borderRadius: "6px 4px 4px 6px",
          }}
        />
      </div>
    </div>
  )
}

export interface BookHeaderProps {
  children: React.ReactNode
  className?: string
}

export function BookHeader({ children, className = "" }: BookHeaderProps) {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>
}

export interface BookTitleProps {
  children: React.ReactNode
  className?: string
}

export function BookTitle({ children, className = "" }: BookTitleProps) {
  return (
    <h1 className={`mb-1 mt-3 select-none font-bold text-balance ${className}`}>
      {children}
    </h1>
  )
}

export interface BookDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function BookDescription({ children, className = "" }: BookDescriptionProps) {
  return <p className={`select-none text-xs/relaxed opacity-80 ${className}`}>{children}</p>
}

export default PerspectiveBook