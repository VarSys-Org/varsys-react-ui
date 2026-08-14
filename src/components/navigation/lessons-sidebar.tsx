"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Lesson {
  name: string
  href?: string
}

export interface LessonGroup {
  title: string
  lessons: Lesson[]
}

export interface LessonsSidebarProps
  extends React.HTMLAttributes<HTMLElement> {
  groups?: LessonGroup[]
  searchPlaceholder?: string
  height?: number
}

const DEFAULT_GROUPS: LessonGroup[] = [
  {
    title: "Rust Basics",
    lessons: [
      { name: "Introduction to Rust" },
      { name: "Installing and Setting up Rust" },
      { name: "Basic Syntax and Data Types" },
      { name: "Control Flow Statements" },
      { name: "Functions and Modules" },
      { name: "Ownership and Borrowing" },
      { name: "Structs and Enums" },
      { name: "Traits and Generics" },
    ],
  },
  {
    title: "Cargo Basics",
    lessons: [
      { name: "Introduction to Cargo" },
      { name: "Installing and Configuring Cargo" },
      { name: "Basic Cargo Commands" },
      { name: "Working with Dependencies" },
      { name: "Rust Workspaces with Cargo" },
      { name: "Ownership and Borrowing" },
      { name: "Structs and Enums" },
      { name: "Traits and Generics" },
    ],
  },
]

export function LessonsSidebar({
  groups = DEFAULT_GROUPS,
  searchPlaceholder = "Search...",
  height = 800,
  className,
}: LessonsSidebarProps) {
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <nav className="fixed top-0 left-0 z-40 h-full w-full space-y-8 overflow-auto border-r bg-background sm:w-80">
        <div className="sticky top-0 space-y-8 bg-background">
          <div className="flex h-20 items-center border-b px-4 md:px-8">
            <span className="text-lg font-semibold text-foreground">
              Float UI
            </span>
          </div>
          <div className="px-4 md:px-8">
            <div className="relative w-full">
              <Search className="absolute left-3 inset-y-0 my-auto h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                className="w-full rounded-lg border bg-background py-2 pl-12 pr-3 text-sm text-muted-foreground shadow-sm outline-none duration-200 ring-blue-600 focus:ring-2"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6 text-[0.9rem]">
          {groups.map((group, idx) => (
            <div key={idx}>
              <h3 className="px-4 pb-3 font-medium text-foreground md:px-8">
                {group.title}
              </h3>
              <div className="px-4 text-muted-foreground md:px-8">
                <ul>
                  {group.lessons.map((lesson, li) => (
                    <li key={li}>
                      <a
                        href={lesson.href ?? "#"}
                        className="block w-full border-l py-2 px-4 duration-150 hover:border-indigo-600 hover:text-foreground"
                      >
                        {lesson.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default LessonsSidebar
