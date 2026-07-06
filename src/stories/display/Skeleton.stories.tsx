import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton } from "../../components/display/skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Display/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 rounded-2xl border p-4">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const Text: Story = {
  render: () => (
    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[70%]" />
    </div>
  ),
}

export const Table: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex gap-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ))}
    </div>
  ),
}
