"use client"

import { useState } from "react"

import { Button } from "@/components/buttons/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/overlays/dialog"
import { Label } from "@/components/forms/label"
import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group"
import { Textarea } from "@/components/forms/textarea"

export interface RatingDialogProps {
  triggerLabel?: string
  title?: string
  question?: string
  ratingLabels?: [string, string]
  ratingCount?: number
}

export function RatingDialog({
  triggerLabel = "Rating",
  title = "Help us improve",
  question = "How hard was it to set up your account?",
  ratingLabels = ["Very easy", "Very dificult"],
  ratingCount = 9,
}: RatingDialogProps) {
  const [value, setValue] = useState<string>("5")
  const [feedback, setFeedback] = useState<string>("")

  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline">{triggerLabel}</Button>}
      />
      <DialogContent className="flex flex-col gap-0 p-0">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 py-4">
          <form className="space-y-5">
            <div className="space-y-4">
              <div>
                <fieldset className="space-y-4">
                  <legend className="font-semibold text-foreground text-lg leading-none">
                    {question}
                  </legend>
                  <RadioGroup
                    className="flex gap-0 -space-x-px rounded-md shadow-xs"
                    defaultValue={value}
                    name="rating-dialog"
                    onValueChange={setValue}
                  >
                    {Array.from({ length: ratingCount }, (_, number) => (
                      <label
                        className="relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-input text-center text-sm outline-none transition-[color,box-shadow] first:rounded-s-md last:rounded-e-md has-data-[state=checked]:z-10 has-data-disabled:cursor-not-allowed has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-data-disabled:opacity-50 has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                        key={number}
                      >
                        <RadioGroupItem
                          className="sr-only after:absolute after:inset-0"
                          value={number.toString()}
                        />
                        {number}
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>
                <div className="mt-2 flex justify-between text-muted-foreground text-xs">
                  <p>{ratingLabels[0]}</p>
                  <p>{ratingLabels[1]}</p>
                </div>
              </div>

              <div className="*:not-first:mt-2">
                <Label>Why did you give this rating?</Label>
                <Textarea
                  aria-label="Send feedback"
                  id="feedback"
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="How can we improve?"
                  value={feedback}
                />
              </div>
            </div>
            <Button className="w-full" type="button">
              Send feedback
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}