import type { Meta, StoryObj } from "@storybook/react"
import { ConfettiButton } from "../../components/buttons/confetti-button"

const meta: Meta<typeof ConfettiButton> = {
  title: "Buttons/ConfettiButton",
  component: ConfettiButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ConfettiButton>Celebrate</ConfettiButton>
    </div>
  ),
}

export const WithCustomOptions: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ConfettiButton
        options={{
          particleCount: 150,
          spread: 90,
          scalar: 1.2,
        }}
      >
        Big Party
      </ConfettiButton>
    </div>
  ),
}

export const ConfettiStar: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <ConfettiButton
        variant="outline"
        options={{
          particleCount: 80,
          spread: 100,
          shapes: ["star"],
          colors: ["#ff0", "#f0f", "#0ff"],
        }}
      >
        Stars
      </ConfettiButton>
    </div>
  ),
}