import type { Meta, StoryObj } from "@storybook/react"
import { SpinningLogo } from "../../components/effects/spinning-logo"
import { Hexagon } from "lucide-react"

const meta: Meta<typeof SpinningLogo> = {
  title: "Effects/SpinningLogo",
  component: SpinningLogo,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpinningLogo size={48} duration={6}>
        <Hexagon className="size-full text-primary" fill="var(--primary)" />
      </SpinningLogo>
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpinningLogo
        size={64}
        duration={4}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2'%3E%3Cpath d='M12 2 2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E"
      />
    </div>
  ),
}

export const Counterclockwise: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SpinningLogo size={56} duration={8} direction="counterclockwise">
        <span className="flex size-full items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
          V
        </span>
      </SpinningLogo>
    </div>
  ),
}