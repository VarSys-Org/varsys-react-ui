import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "../../components/ui/progress"
import { useState, useEffect } from "react"

const meta: Meta<typeof Progress> = {
  title: "shadcn/Progress",
  component: Progress,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { value: 60 } }
export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13)
    useEffect(() => { const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 1)), 400); return () => clearInterval(t) }, [])
    return <Progress value={progress} className="w-[60%]" />
  },
}
