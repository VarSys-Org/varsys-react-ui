import type { Meta, StoryObj } from "@storybook/react"
import { Marquee } from "../../components/layout/marquee"
import { cn } from "../../lib/utils"

const meta: Meta<typeof Marquee> = {
  title: "Layout/Marquee",
  component: Marquee,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Vite", "Node.js"]

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Marquee className="[--duration:20s]">
        {items.map((item) => (
          <div key={item} className={cn("mx-2 flex h-10 items-center rounded-md bg-muted px-4 text-sm font-medium")}>
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  ),
}

export const Reverse: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Marquee reverse className="[--duration:20s]">
        {items.map((item) => (
          <div key={item} className={cn("mx-2 flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground")}>
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  ),
}
