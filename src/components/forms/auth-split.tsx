"use client"

import * as React from "react"
import { Chrome, Github, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AuthSplitAvatar {
  src: string
  alt?: string
}

export interface AuthSplitProps
  extends React.HTMLAttributes<HTMLElement> {
  signUpTitle?: string
  loginPrompt?: string
  loginLabel?: string
  nameLabel?: string
  emailLabel?: string
  passwordLabel?: string
  submitLabel?: string
  panelTitle?: string
  panelDescription?: string
  joinLabel?: string
  avatars?: AuthSplitAvatar[]
  height?: number
}

const DEFAULT_AVATARS: AuthSplitAvatar[] = [
  { src: "https://randomuser.me/api/portraits/women/79.jpg", alt: "User avatar" },
  { src: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg", alt: "User avatar" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&h=200&w=200", alt: "User avatar" },
  { src: "https://randomuser.me/api/portraits/men/86.jpg", alt: "User avatar" },
  { src: "https://images.unsplash.com/photo-1510227272981-87123e259b17?auto=format&fit=crop&h=200&w=200", alt: "User avatar" },
]

export function AuthSplit({
  signUpTitle = "Sign up",
  loginPrompt = "Already have an account?",
  loginLabel = "Log in",
  nameLabel = "Name",
  emailLabel = "Email",
  passwordLabel = "Password",
  submitLabel = "Create account",
  panelTitle = "Start growing your business quickly",
  panelDescription = "Create an account and get access to all features for 30-days, No credit card required.",
  joinLabel = "Join 5.000+ users",
  avatars = DEFAULT_AVATARS,
  height = 700,
  className,
}: AuthSplitProps) {
  return (
    <main className={cn("w-full flex", className)}>
      <div
        className="relative hidden flex-1 items-center justify-center bg-foreground lg:flex"
        style={{ height }}
      >
        <div className="relative z-10 w-full max-w-md">
          <h3 className="text-3xl font-bold text-background">{panelTitle}</h3>
          <p className="mt-2 text-muted-foreground">{panelDescription}</p>
          <div className="mt-8 flex items-center -space-x-2 overflow-hidden">
            {avatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.src}
                alt={avatar.alt ?? "User avatar"}
                className="h-10 w-10 rounded-full border-2 border-background"
              />
            ))}
            <p className="translate-x-5 text-sm font-medium text-muted-foreground">
              {joinLabel}
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto"
          style={{
            height: 500,
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        />
      </div>
      <div
        className="flex flex-1 items-center justify-center"
        style={{ height }}
      >
        <div className="w-full max-w-md space-y-8 bg-background px-4 text-muted-foreground sm:px-0">
          <div>
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {signUpTitle}
              </h3>
              <p>
                {loginPrompt}{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {loginLabel}
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            <button
              type="button"
              aria-label="Continue with Google"
              className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-muted active:bg-accent"
            >
              <Chrome className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Continue with Twitter"
              className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-muted active:bg-accent"
            >
              <Twitter className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Continue with GitHub"
              className="flex items-center justify-center rounded-lg border py-2.5 duration-150 hover:bg-muted active:bg-accent"
            >
              <Github className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <span className="block h-px w-full bg-muted" />
            <p className="absolute inset-x-0 -top-2 mx-auto w-fit bg-background px-2 text-sm">
              Or continue with
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="auth-name" className="font-medium">
                {nameLabel}
              </label>
              <input
                id="auth-name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-muted-foreground shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="auth-email" className="font-medium">
                {emailLabel}
              </label>
              <input
                id="auth-email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-muted-foreground shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="auth-password" className="font-medium">
                {passwordLabel}
              </label>
              <input
                id="auth-password"
                type="password"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-muted-foreground shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600"
            >
              {submitLabel}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default AuthSplit
