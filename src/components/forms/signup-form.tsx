"use client"

import React from "react"
import { cn } from "@/lib/cn"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react"

export interface SignupFormProps {
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const SignupForm = ({ className, onSubmit }: SignupFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(e)
  }

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black",
        className,
      )}
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <FormLabel htmlFor="firstname">First name</FormLabel>
            <FormInput id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <FormLabel htmlFor="lastname">Last name</FormLabel>
            <FormInput id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <FormInput id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <FormLabel htmlFor="twitterpassword">Your twitter password</FormLabel>
          <FormInput id="twitterpassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <SocialButton icon={<IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />} label="GitHub" />
          <SocialButton icon={<IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />} label="Google" />
          <SocialButton icon={<IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />} label="OnlyFans" />
        </div>
      </form>
    </div>
  )
}

const SocialButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button
    className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    type="button"
  >
    {icon}
    <span className="text-sm text-neutral-700 dark:text-neutral-300">{label}</span>
    <BottomGradient />
  </button>
)

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
)

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
)

const FormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor: string
}) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium text-neutral-800 dark:text-neutral-200"
  >
    {children}
  </label>
)

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600",
      className,
    )}
    ref={ref}
    {...props}
  />
))
FormInput.displayName = "FormInput"
