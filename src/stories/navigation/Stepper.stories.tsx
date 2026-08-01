import type { Meta, StoryObj } from "@storybook/react"
import { Stepper } from "../../components/navigation/stepper"

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
  { title: "Step 4" },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="w-full max-w-lg">
        <Stepper items={items} defaultValue={2} />
      </div>
    </div>
  ),
}

export const Linear: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="w-full max-w-lg">
        <Stepper items={items} defaultValue={1} linear />
      </div>
    </div>
  ),
}

export const Solid: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="w-full max-w-lg">
        <Stepper items={items} defaultValue={1} variant="solid" />
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-96 justify-center px-8 py-6">
      <div className="w-full max-w-sm">
        <Stepper
          orientation="vertical"
          defaultValue={1}
          items={[
            {
              title: "Profile details",
              description:
                "Add your full name, role, and a short introduction so teammates can immediately understand who you are.",
            },
            {
              title: "Workspace setup",
              description:
                "Connect the tools you plan to use and choose your preferences before inviting collaborators.",
            },
            {
              title: "Final review",
              description:
                "Double-check the summary, confirm the important details, and publish when everything looks ready.",
            },
          ]}
        />
      </div>
    </div>
  ),
}
