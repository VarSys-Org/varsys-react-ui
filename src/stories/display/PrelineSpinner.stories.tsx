import type { Meta, StoryObj } from "@storybook/react"
import { PrelineSpinner } from "../../components/display/preline-spinner"

const meta: Meta<typeof PrelineSpinner> = {
  title: "Display/PrelineSpinner",
  component: PrelineSpinner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 p-8">
      <PrelineSpinner />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="circle" />
        <span className="text-xs text-muted-foreground">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="svg" />
        <span className="text-xs text-muted-foreground">svg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="throbber" />
        <span className="text-xs text-muted-foreground">throbber</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="ring" />
        <span className="text-xs text-muted-foreground">ring</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="pulse" />
        <span className="text-xs text-muted-foreground">pulse</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="wave" />
        <span className="text-xs text-muted-foreground">wave</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="bars" />
        <span className="text-xs text-muted-foreground">bars</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="terminal" />
        <span className="text-xs text-muted-foreground">terminal</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="caret" label="Loading..." />
        <span className="text-xs text-muted-foreground">caret</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="shimmer" label="Loading" />
        <span className="text-xs text-muted-foreground">shimmer</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="dots" label="Loading" />
        <span className="text-xs text-muted-foreground">dots</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="ellipsis" />
        <span className="text-xs text-muted-foreground">ellipsis</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PrelineSpinner variant="typing" />
        <span className="text-xs text-muted-foreground">typing</span>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end justify-center gap-6 p-8">
      <PrelineSpinner size="sm" />
      <PrelineSpinner size="md" />
      <PrelineSpinner size="lg" />
    </div>
  ),
}
