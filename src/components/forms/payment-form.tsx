"use client"

import { CreditCardIcon, StoreIcon } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { usePaymentInputs } from "react-payment-inputs"
import images, { type CardImages } from "react-payment-inputs/images"

import { Badge } from "@/components/display/badge"
import { Button } from "@/components/buttons/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/overlays/dialog"
import { Input } from "@/components/forms/input"
import { Label } from "@/components/forms/label"
import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group"

export interface PaymentPlan {
  id: string
  label: string
  price: string
  popular?: boolean
}

export interface PaymentFormProps {
  triggerLabel?: string
  plans?: PaymentPlan[]
  defaultPlan?: string
  couponEnabled?: boolean
}

export function PaymentForm({
  triggerLabel = "Checkout",
  plans = [
    { id: "monthly", label: "Monthly", price: "$32/month" },
    { id: "yearly", label: "Yearly", price: "$320/year", popular: true },
  ],
  defaultPlan = "yearly",
  couponEnabled = true,
}: PaymentFormProps) {
  const id = useId()
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs()
  const couponInputRef = useRef<HTMLInputElement>(null)
  const [showCouponInput, setShowCouponInput] = useState(false)
  const [couponCode, setCouponCode] = useState("")

  useEffect(() => {
    if (showCouponInput && couponInputRef.current) {
      couponInputRef.current.focus()
    }
  }, [showCouponInput])

  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">{triggerLabel}</Button>}
      />
      <DialogContent>
        <div className="mb-2 flex flex-col gap-2">
          <div
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
          >
            <StoreIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">Confirm and pay</DialogTitle>
            <DialogDescription className="text-left">
              Pay securely and cancel any time.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <RadioGroup
              className="grid-cols-2"
              defaultValue={defaultPlan}
              name={`plan-${id}`}
            >
              {plans.map((plan) => (
                <label
                  className="relative flex cursor-pointer flex-col gap-1 rounded-md border border-input px-4 py-3 shadow-xs outline-none transition-[color,box-shadow] has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                  key={plan.id}
                >
                  <RadioGroupItem
                    className="sr-only after:absolute after:inset-0"
                    id={`${plan.id}-${id}`}
                    value={plan.id}
                  />
                  <div className="inline-flex items-start justify-between gap-2">
                    <p className="font-medium text-foreground text-sm">
                      {plan.label}
                    </p>
                    {plan.popular ? <Badge>Popular</Badge> : null}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.price}</p>
                </label>
              ))}
            </RadioGroup>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name on card</Label>
              <Input id={`name-${id}`} required type="text" />
            </div>
            <div className="*:not-first:mt-2">
              <legend className="font-medium text-foreground text-sm">
                Card Details
              </legend>
              <div className="rounded-md shadow-xs">
                <div className="relative focus-within:z-10">
                  <Input
                    className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                    {...getCardNumberProps()}
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {meta.cardType ? (
                      <svg
                        className="overflow-hidden rounded-sm"
                        {...getCardImageProps({
                          images: images as unknown as CardImages,
                        })}
                        width={20}
                      />
                    ) : (
                      <CreditCardIcon aria-hidden="true" size={16} />
                    )}
                  </div>
                </div>
                <div className="-mt-px flex">
                  <div className="min-w-0 flex-1 focus-within:z-10">
                    <Input
                      className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                      {...getExpiryDateProps()}
                    />
                  </div>
                  <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                    <Input
                      className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                      {...getCVCProps()}
                    />
                  </div>
                </div>
              </div>
            </div>
            {couponEnabled ? (
              !showCouponInput ? (
                <button
                  className="text-sm underline hover:no-underline"
                  onClick={() => setShowCouponInput(true)}
                  type="button"
                >
                  + Add coupon
                </button>
              ) : (
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`coupon-${id}`}>Coupon code</Label>
                  <Input
                    id={`coupon-${id}`}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter your code"
                    ref={couponInputRef}
                    value={couponCode}
                  />
                </div>
              )
            ) : null}
          </div>
          <Button className="w-full" type="button">
            Subscribe
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-xs">
          Payments are non-refundable. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  )
}