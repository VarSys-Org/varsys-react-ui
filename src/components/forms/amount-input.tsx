import * as React from "react"
import { cn } from "@/lib/cn"

export interface AmountInputProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  placeholder?: string
  currencies?: string[]
  defaultValue?: string
  onAmountChange?: (value: string) => void
  onCurrencyChange?: (currency: string) => void
}

export function AmountInput({
  label = "Amount",
  placeholder = "0.00",
  currencies = ["USD", "EUR", "MRO"],
  defaultValue,
  onAmountChange,
  onCurrencyChange,
  className,
}: AmountInputProps) {
  return (
    <div className={cn("max-w-sm mx-auto mt-12", className)}>
      <label className="text-gray-600">{label}</label>
      <div className="relative mt-2 max-w-xs text-gray-500">
        <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
          &#x24;
        </span>
        <input
          type="number"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={(event) => onAmountChange?.(event.target.value)}
          className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <select
            className="text-sm bg-transparent outline-none px-1 rounded-lg h-full"
            onChange={(event) => onCurrencyChange?.(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default AmountInput
