import type { Meta, StoryObj } from "@storybook/react"
import { Quote } from "../../components/display/quote"

const meta: Meta<typeof Quote> = {
  title: "Display/Quote",
  component: Quote,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <blockquote className="max-w-md border-l-2 border-primary pl-4">
        <Quote>
          The only way to do great work is to love what you do.
        </Quote>
        <footer className="mt-2 text-sm text-muted-foreground">
          — Steve Jobs
        </footer>
      </blockquote>
    </div>
  ),
}

export const Truncate: Story = {
  render: () => (
    <div className="max-w-xs p-8">
      <Quote truncate>
        This is a very long inline quotation that will be truncated with an
        ellipsis when it exceeds the available width of its container.
      </Quote>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="max-w-md p-8">
      <p>
        The engineer said{" "}
        <Quote className="italic">
          it works on my machine
        </Quote>{" "}
        before deploying to production.
      </p>
    </div>
  ),
}