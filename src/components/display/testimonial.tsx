import * as React from "react"
import { cn } from "@/lib/cn"

export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  quote: string
  author: string
  role?: string
  avatar?: string
}

export function Testimonial({
  quote,
  author,
  role,
  avatar,
  className,
  ...props
}: TestimonialProps) {
  return (
    <section className={cn("py-14", className)} {...props}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <figure>
            <blockquote>
              <p className="text-center text-xl font-semibold text-foreground sm:text-2xl">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-x-4">
              {avatar ? (
                <img
                  src={avatar}
                  className="size-16 rounded-full object-cover"
                  alt={author}
                />
              ) : null}
              <div>
                <span className="block font-semibold text-foreground">
                  {author}
                </span>
                {role ? (
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {role}
                  </span>
                ) : null}
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
