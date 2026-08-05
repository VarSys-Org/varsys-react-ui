import * as React from "react"
import { cn } from "@/lib/utils"

export interface TeamMemberCardMember {
  avatar: string
  name: string
  email: string
}

export interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  members: TeamMemberCardMember[]
  title?: string
  description?: string
  actionLabel?: string
}

export function TeamMemberCard({
  members,
  title = "Team members",
  description = "Give your team members access to manage the system.",
  actionLabel = "New member",
  className,
}: TeamMemberCardProps) {
  return (
    <div className={cn("max-w-2xl mx-auto px-4 py-16", className)}>
      <div className="items-start justify-between sm:flex">
        <div>
          <h4 className="text-gray-800 text-xl font-semibold">{title}</h4>
          <p className="mt-2 text-gray-600 text-base sm:text-sm">
            {description}
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          {actionLabel}
        </a>
      </div>
      <ul className="mt-12 divide-y">
        {members.map((item, idx) => (
          <li key={idx} className="py-5 flex items-start justify-between">
            <div className="flex gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="flex-none w-12 h-12 rounded-full"
              />
              <div>
                <span className="block text-sm text-gray-700 font-semibold">
                  {item.name}
                </span>
                <span className="block text-sm text-gray-600">{item.email}</span>
              </div>
            </div>
            <a
              href="#"
              className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100"
            >
              Manage
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamMemberCard
