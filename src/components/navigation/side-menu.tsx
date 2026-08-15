"use client"

import * as React from "react"
import { ChevronDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/cn"

export interface SideMenuItem {
  label: string
  icon?: LucideIcon
  href?: string
  active?: boolean
}

export interface SideMenuGroup {
  label: string
  icon?: LucideIcon
  items: SideMenuItem[]
  defaultOpen?: boolean
}

export interface SideMenuUser {
  name: string
  email: string
  avatar?: string
}

export interface SideMenuProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode
  groups?: SideMenuGroup[]
  items?: SideMenuItem[]
  footer?: React.ReactNode
  user?: SideMenuUser
  variant?: "expanded" | "icon"
  className?: string
  onItemClick?: (item: SideMenuItem) => void
}

export function SideMenu({
  brand,
  groups = [],
  items = [],
  footer,
  user,
  variant = "expanded",
  className,
  onItemClick,
}: SideMenuProps) {
  const [activeLabel, setActiveLabel] = React.useState<string | null>(null)
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.map((g) => [g.label, g.defaultOpen ?? false])),
  )

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const isIcon = variant === "icon"

  const renderLink = (item: SideMenuItem) => {
    const Icon = item.icon
    const isActive = item.active ?? activeLabel === item.label
    const content = (
      <>
        {Icon ? (
          <Icon
            className={cn("size-5 shrink-0", isActive ? "text-foreground" : "text-muted-foreground")}
          />
        ) : null}
        {!isIcon ? <span>{item.label}</span> : null}
      </>
    )

    return (
      <a
        key={item.label}
        href={item.href ?? "#"}
        onClick={() => {
          setActiveLabel(item.label)
          onItemClick?.(item)
        }}
        aria-label={isIcon ? item.label : undefined}
        className={cn(
          "group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
          isIcon && "grid place-content-center px-2",
          isActive
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        {content}
        {isIcon ? (
          <span className="invisible absolute left-full ml-4 rounded-sm bg-muted px-2 py-1.5 text-xs font-medium text-foreground whitespace-nowrap group-hover:visible">
            {item.label}
          </span>
        ) : null}
      </a>
    )
  }

  return (
    <nav
      className={cn(
        "flex h-full flex-col justify-between border-e border-border bg-background",
        isIcon ? "w-16" : "w-64",
        className,
      )}
    >
      <div className={cn(isIcon ? "p-2" : "p-4")}>
        {brand ?? (
          <span className="grid h-12 place-content-center rounded-lg bg-muted text-sm text-muted-foreground">
            {isIcon ? brand ?? "L" : "Logo"}
          </span>
        )}

        <ul className={cn("space-y-1", isIcon ? "mt-2 border-t border-border px-2 pt-4" : "mt-4")}>
          {items.map((item) => (
            <li key={item.label}>{renderLink(item)}</li>
          ))}
          {groups.map((group) => {
            const Icon = group.icon
            const isOpen = openGroups[group.label] ?? false
            return (
              <li key={group.label}>
                {isIcon ? (
                  renderLink({ label: group.label, icon: group.icon })
                ) : (
                  <details
                    open={isOpen}
                    onToggle={(e) => setOpenGroups((prev) => ({ ...prev, [group.label]: e.currentTarget.open }))}
                    className="group [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary
                      className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        {Icon ? <Icon className="size-5 shrink-0" /> : null}
                        {group.label}
                      </span>
                      <ChevronDown className="size-4 shrink-0 transition duration-300 group-open:-rotate-180" />
                    </summary>
                    <ul className="mt-2 space-y-1 px-4">
                      {group.items.map((item) => (
                        <li key={item.label}>{renderLink(item)}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {footer ? (
        <div className={cn("sticky inset-x-0 bottom-0 border-t border-border", isIcon ? "p-2" : "")}>
          {footer}
        </div>
      ) : user ? (
        <div
          className={cn(
            "sticky inset-x-0 bottom-0 border-t border-border",
            isIcon ? "p-2" : "bg-background",
          )}
        >
          <a
            href="#"
            className={cn(
              "flex items-center gap-2 hover:bg-muted hover:transition-colors",
              isIcon
                ? "group relative grid place-content-center rounded-lg px-4 py-2 text-muted-foreground hover:text-foreground"
                : "p-4",
            )}
          >
            {user.avatar ? (
              <img
                alt=""
                src={user.avatar}
                className="size-10 rounded-full object-cover"
              />
            ) : (
              <span className="grid size-10 shrink-0 place-content-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                {user.name.charAt(0)}
              </span>
            )}
            {!isIcon ? (
              <p className="min-w-0 text-xs text-foreground">
                <strong className="block truncate font-medium">{user.name}</strong>
                <span className="block truncate">{user.email}</span>
              </p>
            ) : (
              <span className="invisible absolute left-full ml-4 rounded-sm bg-muted px-2 py-1.5 text-xs font-medium text-foreground whitespace-nowrap group-hover:visible">
                {user.name}
              </span>
            )}
          </a>
        </div>
      ) : null}
    </nav>
  )
}

export default SideMenu
