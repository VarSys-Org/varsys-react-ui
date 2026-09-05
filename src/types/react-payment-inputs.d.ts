declare module "react-payment-inputs" {
  import type * as React from "react"

  interface PaymentInputsProps {
    error?: string
    children?: (props: unknown) => React.ReactNode
  }

  interface PaymentInputs {
    meta: { cardType?: string }
    getCardNumberProps: () => Record<string, unknown>
    getExpiryDateProps: () => Record<string, unknown>
    getCVCProps: () => Record<string, unknown>
    getCardImageProps: (args?: {
      images?: Record<string, unknown>
      field?: string
    }) => Record<string, unknown>
    wrapperProps: Record<string, unknown>
    getInputProps: () => Record<string, unknown>
  }

  export function usePaymentInputs(): PaymentInputs
  export default function PaymentInputs(props: PaymentInputsProps): React.ReactNode
}

declare module "react-payment-inputs/images" {
  const images: Record<string, string>
  export default images
  export type CardImages = Record<string, string>
}