import * as React from "react"
import { cn } from "@/lib/cn"

export interface NotFoundPageProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "centered" | "image" | "logo"
  title?: string
  badge?: string
  description?: string
  primaryActionLabel?: string
  secondaryActionLabel?: string
  logo?: string
  image?: string
}

export function NotFoundPage({
  variant = "centered",
  title = "Page not found",
  badge = "404 Error",
  description = "Sorry, the page you are looking for could not be found or has been removed.",
  primaryActionLabel = "Go back",
  secondaryActionLabel = "Contact support",
  logo = "https://floatui.com/logo.svg",
  image = "https://raw.githubusercontent.com/sidiDev/remote-assets/ddc5be7e0f83988b8148c61a9341d69ce53decaa/undraw_page_not_found_re_e9o6_rm5sxu.svg",
  className,
}: NotFoundPageProps) {
  return (
    <main className={cn("h-[680px]", className)}>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div
          className={cn(
            "max-w-lg mx-auto space-y-3",
            variant === "centered" && "text-center",
            variant === "image" && "flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex"
          )}
        >
          {variant === "image" ? (
            <div className="flex-1 max-w-lg">
              <img src={image} alt="Page not found" />
            </div>
          ) : null}

          <div
            className={cn(
              "space-y-3",
              variant === "image" && "mt-12 flex-1 max-w-lg md:mt-0"
            )}
          >
            {variant === "logo" ? (
              <div className="pb-6">
                <img src={logo} width={150} className="mx-auto" alt="Logo" />
              </div>
            ) : null}
            {variant === "centered" ? (
              <h3 className="text-indigo-600 font-semibold">{badge}</h3>
            ) : null}
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              {title}
            </p>
            <p className="text-gray-600">{description}</p>

            {variant === "centered" ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
                >
                  {primaryActionLabel}
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                >
                  {secondaryActionLabel}
                </a>
              </div>
            ) : variant === "image" ? (
              <a
                href="#"
                className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
              >
                {primaryActionLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
