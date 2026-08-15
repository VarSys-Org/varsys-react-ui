"use client"

import * as React from "react"
import { ArrowRight, Search } from "lucide-react"
import { cn } from "@/lib/cn"

export interface FaqSearchItem {
  question: string
  answer: string
}

export interface FaqSearchProps
  extends React.HTMLAttributes<HTMLElement> {
  items?: FaqSearchItem[]
  title?: string
  description?: string
  contactLabel?: string
  placeholder?: string
  readMoreLabel?: string
}

const DEFAULT_ITEMS: FaqSearchItem[] = [
  {
    question: "What are some random questions to ask?",
    answer:
      "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    question: "Do you include common questions?",
    answer:
      "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    question: "Can I use this for 21 questions?",
    answer:
      "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    question: "Are these questions for girls or for boys?",
    answer:
      "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    question: "What do you wish you had more talent doing?",
    answer:
      "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
]

export function FaqSearch({
  items = DEFAULT_ITEMS,
  title = "How can we help?",
  description = "Everything you need to know about the product. Can't find the answer you're looking for? feel free to",
  contactLabel = "contact us",
  placeholder = "Enter your email",
  readMoreLabel = "Read more",
  className,
}: FaqSearchProps) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="space-y-5 sm:mx-auto sm:max-w-md sm:text-center">
          <h3 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}{" "}
            <a
              className="whitespace-nowrap font-semibold text-indigo-600"
              href="#"
            >
              {contactLabel}
            </a>
            .
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto sm:max-w-xs"
          >
            <div className="relative">
              <Search className="absolute left-3 inset-y-0 my-auto h-6 w-6 text-muted-foreground" />
              <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-muted-foreground shadow-sm outline-none focus:border-indigo-600"
              />
            </div>
          </form>
        </div>
        <div className="mt-12">
          <ul className="grid-cols-2 space-y-8 gap-12 sm:grid sm:space-y-0 lg:grid-cols-3">
            {items.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  {item.question}
                </summary>
                <p className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-x-1 text-sm font-medium text-indigo-600 duration-150 hover:text-indigo-400"
                >
                  {readMoreLabel}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FaqSearch
