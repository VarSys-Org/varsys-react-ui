"use client"

import * as React from "react"
import { ChevronDown, Phone } from "lucide-react"
import RPNInput, {
  getCountryCallingCode,
  type Country,
  type FlagProps,
} from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { cn } from "@/lib/cn"
import { Input } from "@/components/forms/input"
import { Label } from "@/components/forms/label"

export interface PhoneInputProps
  extends Omit<React.ComponentProps<"input">, "value" | "onChange" | "ref"> {
  /** Current phone number value. */
  value?: string
  /** Called with the formatted phone number whenever it changes. */
  onChange?: (value: string) => void
  /** Country shown by default (ISO 3166-1 alpha-2, e.g. "US"). */
  defaultCountry?: Country
  /** Show the number in international format. */
  international?: boolean
  /** Accessible label rendered above the input. */
  label?: string
  /** Id for the input and label association. */
  id?: string
  className?: string
}

const PhoneInputField = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <Input
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10",
        className,
      )}
      data-slot="phone-input"
      {...props}
    />
  )
}

PhoneInputField.displayName = "PhoneInputField"

type CountrySelectProps = {
  disabled?: boolean
  value: Country
  onChange: (value: Country) => void
  options: { label: string; value: Country | undefined }[]
}

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Country)
  }

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-md border border-input bg-background py-2 ps-3 pe-2 text-muted-foreground transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-disabled:pointer-events-none has-aria-invalid:border-destructive/60 has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40">
      <div aria-hidden="true" className="inline-flex items-center gap-1">
        <FlagComponent aria-hidden="true" country={value} countryName={value} />
        <span className="text-muted-foreground/80">
          <ChevronDown aria-hidden="true" size={16} />
        </span>
      </div>
      <select
        aria-label="Select country"
        className="absolute inset-0 text-sm opacity-0"
        disabled={disabled}
        onChange={handleSelect}
        value={value}
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  )
}

const FlagComponent = ({ country, countryName }: FlagProps) => {
  const Flag = flags[country]

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone aria-hidden="true" size={16} />
      )}
    </span>
  )
}

export function PhoneInput({
  value = "",
  onChange,
  defaultCountry,
  international,
  label = "Phone number",
  id,
  className,
  placeholder,
  ...props
}: PhoneInputProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId

  return (
    <div dir="ltr" className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={inputId}>{label}</Label>
      <RPNInput
        className="flex rounded-md shadow-xs"
        countrySelectComponent={CountrySelect}
        flagComponent={FlagComponent}
        id={inputId}
        inputComponent={PhoneInputField}
        international={international}
        defaultCountry={defaultCountry}
        onChange={(newValue) => onChange?.(newValue ?? "")}
        placeholder={placeholder ?? "Enter phone number"}
        value={value}
        {...props}
      />
    </div>
  )
}

PhoneInput.displayName = "PhoneInput"

export default PhoneInput