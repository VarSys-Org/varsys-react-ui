"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const NavbarMenu = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("", className)}>{children}</div>
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-4 rounded-full border border-transparent bg-white px-8 py-6 shadow-input dark:border-white/[0.2] dark:bg-black"
    >
      {children}
    </nav>
  )
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 transform">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-1/2 rounded-br-full rounded-bl-full" />
              <motion.div
                layoutId="menu"
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-md dark:border-white/[0.2] dark:bg-black"
              >
                <div className="flex h-full w-max flex-col gap-2 p-4">
                  {children}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-sm font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-xs text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  )
}

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
    >
      {children}
    </a>
  )
}
