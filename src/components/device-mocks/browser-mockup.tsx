"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Lock, Plus, RefreshCw, Share, Star } from "lucide-react"

import { cn } from "@/lib/cn"

interface MockupContentProps {
  imageSrc?: string
  videoSrc?: string
  children?: React.ReactNode
}

function MockupContent({ imageSrc, videoSrc, children }: MockupContentProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/20">
      {imageSrc ? (
        <img src={imageSrc} alt="" className="size-full object-cover" />
      ) : videoSrc ? (
        <video src={videoSrc} autoPlay loop muted playsInline className="size-full object-cover" />
      ) : children ? (
        children
      ) : (
        <div className="flex size-full flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ml-auto h-2.5 w-24 rounded-full bg-muted-foreground/20" />
          </div>
          <div className="h-6 w-1/2 rounded-md bg-muted-foreground/20" />
          <div className="h-3 w-3/4 rounded-md bg-muted-foreground/10" />
          <div className="mt-auto grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg bg-muted-foreground/10" />
            <div className="h-16 rounded-lg bg-muted-foreground/10" />
            <div className="h-16 rounded-lg bg-muted-foreground/10" />
          </div>
        </div>
      )}
    </div>
  )
}

function TrafficLights({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)} aria-hidden="true">
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#febc2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
    </div>
  )
}

export interface ChromeMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  imageSrc?: string
  videoSrc?: string
}

function ChromeMockup({ url = "shadcn.com", imageSrc, videoSrc, children, className, ...props }: ChromeMockupProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl border border-border bg-background shadow-sm", className)}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-3 py-2.5">
        <TrafficLights />
        <div className="flex items-center gap-2 text-muted-foreground">
          <ChevronLeft className="size-3.5" />
          <ChevronRight className="size-3.5" />
          <RefreshCw className="size-3" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5 text-xs text-muted-foreground">
          <Lock className="size-3 shrink-0" />
          <span className="truncate">{url}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Star className="size-3.5" />
          <Plus className="size-3.5" />
        </div>
      </div>
      <MockupContent imageSrc={imageSrc} videoSrc={videoSrc}>
        {children}
      </MockupContent>
    </div>
  )
}

ChromeMockup.displayName = "ChromeMockup"

export interface SafariMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  imageSrc?: string
  videoSrc?: string
}

function SafariMockup({ url = "shadcn.com", imageSrc, videoSrc, children, className, ...props }: SafariMockupProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl border border-border bg-background shadow-sm", className)}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
        <div className="flex items-center gap-2 text-muted-foreground">
          <ChevronLeft className="size-4" />
          <ChevronRight className="size-4" />
        </div>
        <div className="mx-auto flex w-full max-w-md min-w-0 items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
          <Lock className="size-3 shrink-0" />
          <span className="truncate">{url}</span>
          <RefreshCw className="ml-auto size-3 shrink-0" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Share className="size-4" />
        </div>
      </div>
      <MockupContent imageSrc={imageSrc} videoSrc={videoSrc}>
        {children}
      </MockupContent>
    </div>
  )
}

SafariMockup.displayName = "SafariMockup"

export interface FirefoxMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  imageSrc?: string
  videoSrc?: string
}

function FirefoxMockup({ url = "shadcn.com", imageSrc, videoSrc, children, className, ...props }: FirefoxMockupProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl border border-border bg-background shadow-sm", className)}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-3 py-2.5">
        <TrafficLights />
        <div className="mx-auto flex w-full max-w-sm min-w-0 items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">
          <Lock className="size-3 shrink-0" />
          <span className="truncate">{url}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Star className="size-3.5" />
        </div>
      </div>
      <MockupContent imageSrc={imageSrc} videoSrc={videoSrc}>
        {children}
      </MockupContent>
    </div>
  )
}

FirefoxMockup.displayName = "FirefoxMockup"

export { ChromeMockup, SafariMockup, FirefoxMockup }

export default ChromeMockup
