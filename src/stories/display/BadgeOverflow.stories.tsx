import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../../components/display/badge"
import { BadgeOverflow } from "../../components/display/badge-overflow"

const meta: Meta<typeof BadgeOverflow> = {
  title: "Display/BadgeOverflow",
  component: BadgeOverflow,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const tags = [
  "TypeScript",
  "React",
  "Tailwind",
  "Storybook",
  "Recharts",
  "Vite",
  "shadcn/ui",
  "Magic UI",
  "Base UI",
  "Radix UI",
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-24 items-center p-8">
      <div className="w-full max-w-md">
        <BadgeOverflow
          items={tags}
          renderBadge={(item, label) => (
            <Badge key={label} variant="secondary">
              {label}
            </Badge>
          )}
        />
      </div>
    </div>
  ),
}

export const TwoLines: Story = {
  render: () => (
    <div className="flex min-h-24 items-center p-8">
      <div className="w-full max-w-md">
        <BadgeOverflow
          items={tags}
          lineCount={2}
          renderBadge={(item, label) => (
            <Badge key={label} variant="secondary">
              {label}
            </Badge>
          )}
        />
      </div>
    </div>
  ),
}

export const CustomOverflow: Story = {
  render: () => (
    <div className="flex min-h-24 items-center p-8">
      <div className="w-full max-w-md">
        <BadgeOverflow
          items={tags}
          renderBadge={(item, label) => (
            <Badge key={label} variant="secondary">
              {label}
            </Badge>
          )}
          renderOverflow={(count) => (
            <Badge variant="outline">+{count} more</Badge>
          )}
        />
      </div>
    </div>
  ),
}