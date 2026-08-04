import * as React from "react"
import { cn } from "@/lib/utils"

export interface FooterLink {
  href: string
  name: string
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: string
  brand?: string
  description?: string
  links?: FooterLink[]
  copyright?: string
}

const DEFAULT_LINKS: FooterLink[] = [
  { href: "#", name: "About" },
  { href: "#", name: "Blog" },
  { href: "#", name: "Team" },
  { href: "#", name: "Careers" },
  { href: "#", name: "Support" },
]

export function Footer({
  logo,
  brand = "Float UI",
  description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  links = DEFAULT_LINKS,
  copyright,
  className,
  ...other
}: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-white px-4 py-5 text-gray-500 dark:bg-background max-w-screen-xl mx-auto md:px-8",
        className
      )}
      {...other}
    >
      <div className="max-w-lg sm:mx-auto sm:text-center">
        {logo ? (
          <img src={logo} alt={brand} className="w-32 sm:mx-auto" />
        ) : (
          <h2 className="text-lg font-semibold text-foreground sm:mx-auto w-fit">
            {brand}
          </h2>
        )}
        <p className="mt-2 text-[15px] leading-relaxed">{description}</p>
      </div>
      <ul className="mt-8 items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {links.map((item) => (
          <li key={item.name} className="hover:text-foreground">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} {brand} All rights reserved.
        </div>
        {copyright ? <div className="mt-6 sm:mt-0">{copyright}</div> : null}
      </div>
    </footer>
  )
}

export default Footer
