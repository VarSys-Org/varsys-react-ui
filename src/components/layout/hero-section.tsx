import * as React from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface HeroNavItem {
  title: string
  path: string
}

export interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string
  navigation?: HeroNavItem[]
  title: string
  highlight?: string
  description?: string
  primaryAction?: string
  secondaryAction?: string
  signInLabel?: string
}

export function HeroSection({
  brand = "Float UI",
  navigation = [
    { title: "Customers", path: "#" },
    { title: "Careers", path: "#" },
    { title: "Guides", path: "#" },
    { title: "Partners", path: "#" },
  ],
  title,
  highlight,
  description,
  primaryAction = "Get started",
  secondaryAction = "Try it out",
  signInLabel = "Sign In",
  className,
}: HeroSectionProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn(className)}>
      <header>
        <nav className="items-center px-4 pt-5 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="#" className="flex items-center">
              <span className="text-lg font-semibold text-foreground">
                {brand}
              </span>
            </a>
            <button
              type="button"
              className="text-gray-500 outline-none md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((state) => !state)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              open ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0">
              <a
                href="#"
                className="block rounded-md bg-indigo-500 px-6 py-3 text-center text-white shadow-md focus:shadow-none md:inline"
              >
                {signInLabel}
              </a>
            </li>
            <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-500 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
      <section className="mx-auto mt-24 max-w-screen-xl px-4 pb-4 sm:px-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {title}{" "}
            {highlight ? (
              <span className="text-indigo-600">{highlight}</span>
            ) : null}
          </h1>
          {description ? (
            <p className="mx-auto max-w-xl leading-relaxed text-gray-500">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:flex sm:space-x-6 sm:space-y-0">
          <a
            href="#"
            className="block w-full rounded-md bg-indigo-600 px-10 py-3.5 text-center text-white shadow-md sm:w-auto"
          >
            {primaryAction}
          </a>
          <a
            href="#"
            className="block w-full rounded-md border px-10 py-3.5 text-center text-gray-500 duration-300 hover:shadow hover:text-indigo-600 sm:w-auto"
          >
            {secondaryAction}
          </a>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
