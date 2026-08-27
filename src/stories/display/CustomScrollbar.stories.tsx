import type { Meta, StoryObj } from "@storybook/react"
import { CustomScrollbar } from "../../components/display/custom-scrollbar"

const meta: Meta<typeof CustomScrollbar> = {
  title: "Display/CustomScrollbar",
  component: CustomScrollbar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const lines = Array.from({ length: 40 }, (_, i) => `List item number ${i + 1}`)

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <CustomScrollbar maxHeight={240}>
        <ul className="space-y-2 pr-2">
          {lines.map((line) => (
            <li
              key={line}
              className="rounded-md bg-card border border-border px-3 py-2 text-sm text-foreground"
            >
              {line}
            </li>
          ))}
        </ul>
      </CustomScrollbar>
    </div>
  ),
}

export const Thin: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <CustomScrollbar maxHeight={240} width={4}>
        <ul className="space-y-2 pr-2">
          {lines.map((line) => (
            <li
              key={line}
              className="rounded-md bg-card border border-border px-3 py-2 text-sm text-foreground"
            >
              {line}
            </li>
          ))}
        </ul>
      </CustomScrollbar>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <CustomScrollbar maxHeight={200}>
        <p className="text-sm leading-relaxed text-foreground">
          {Array.from({ length: 12 }, () => "This is a scrollable paragraph.").join(
            " "
          )}
        </p>
      </CustomScrollbar>
    </div>
  ),
}