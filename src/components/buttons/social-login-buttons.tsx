"use client"

import * as React from "react"

import { Button } from "@/components/buttons/button"

export type SocialProvider = "google" | "facebook" | "x" | "github"

export interface SocialLoginButtonsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  providers?: SocialProvider[]
  size?: "icon" | "icon-sm" | "icon-lg"
  layout?: "icon" | "label"
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21.35 11.1H12v2.9h5.35c-.5 2.6-2.75 4.3-5.35 4.3a6 6 0 1 1 3.6-10.75l2.15-2.15A9 9 0 1 0 12 21c5.2 0 8.85-3.65 8.85-8.85 0-.35-.03-.7-.1-1.05Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.25-1.5 1.55-1.5h1.65V4.5c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.33H7.5v3.1h2.7v8h3.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.55 22H3.42l7.25-8.28L2.8 2h6.39l4.41 5.83L18.9 2Zm-1.1 18.1h1.72L7.3 3.8H5.46L17.8 20.1Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

const providerConfig: Record<
  SocialProvider,
  { label: string; Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element }
> = {
  google: { label: "Login with Google", Icon: GoogleIcon },
  facebook: { label: "Login with Facebook", Icon: FacebookIcon },
  x: { label: "Login with X", Icon: XIcon },
  github: { label: "Login with GitHub", Icon: GithubIcon },
}

export function SocialLoginButtons({
  providers = ["google", "facebook", "x", "github"],
  size = "icon",
  layout = "icon",
  className,
  ...props
}: SocialLoginButtonsProps) {
  return (
    <div
      className={className}
      data-slot="social-login-buttons"
      {...props}
    >
      {providers.map((provider) => {
        const { label, Icon } = providerConfig[provider]
        if (layout === "label") {
          return (
            <Button key={provider} variant="outline">
              <Icon className="size-4" />
              <span>{label}</span>
            </Button>
          )
        }
        return (
          <Button
            aria-label={label}
            key={provider}
            size={size as "icon"}
            variant="outline"
          >
            <Icon className="size-4" />
          </Button>
        )
      })}
    </div>
  )
}