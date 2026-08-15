import * as React from "react"
import { cn } from "@/lib/cn"

export interface NewsletterSignupProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "banner" | "gradient"
  title?: string
  description?: string
  placeholder?: string
  submitLabel?: string
  privacyLabel?: string
  onSubscribe?: (email: string) => void
}

export function NewsletterSignup({
  variant = "primary",
  title = "Subscribe to our newsletter",
  description = "Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.",
  placeholder = "Enter your email",
  submitLabel = "Subscribe",
  privacyLabel = "No spam ever, we care about the protection of your data. Read our Privacy Policy.",
  onSubscribe,
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubscribe?.(email)
    setEmail("")
  }

  if (variant === "banner") {
    return (
      <section className={cn("py-14 max-w-screen-xl mx-auto", className)}>
        <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <h3 className="text-3xl text-white font-bold">{title}</h3>
              <p className="text-blue-100 leading-relaxed">{description}</p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
                <input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button
                  type="submit"
                  className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                >
                  {submitLabel}
                </button>
              </form>
              <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                {privacyLabel}
              </p>
            </div>
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
            }}
          ></div>
        </div>
      </section>
    )
  }

  if (variant === "gradient") {
    return (
      <section className={cn("py-28 relative", className)}>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-3xl font-bold">{title}</h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder={placeholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow"
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)",
          }}
        ></div>
      </section>
    )
  }

  return (
    <section className={cn("max-w-xl py-12 mx-auto px-4 md:px-8", className)}>
      <div className="space-y-3 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 mx-auto text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
        <h3 className="text-3xl text-gray-800 font-bold">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <form
          onSubmit={handleSubmit}
          className="items-center justify-center sm:flex"
        >
          <input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
          />
          <button
            type="submit"
            className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            {submitLabel}
          </button>
        </form>
        <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
          {privacyLabel}
        </p>
      </div>
    </section>
  )
}

export default NewsletterSignup
