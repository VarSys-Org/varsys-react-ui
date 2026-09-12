import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../../components/forms/checkbox"
import { Hitbox } from "../../components/buttons/hitbox"

const meta: Meta<typeof Hitbox> = {
  title: "Buttons/Hitbox",
  component: Hitbox,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["all", "top", "bottom", "left", "right", "vertical", "horizontal"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: { control: "text" },
    debug: { control: "boolean" },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center gap-8 bg-background p-10">
      <div className="flex flex-col items-center gap-4">
        <Hitbox debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">Default size</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Hitbox size="lg" debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">Large size</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Hitbox radius="full" debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">Full radius</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Hitbox position="bottom" debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">Bottom position</p>
      </div>
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid min-h-80 grid-cols-2 gap-8 bg-background p-10 md:grid-cols-4">
      {(
        ["all", "top", "bottom", "left", "right", "vertical", "horizontal"] as const
      ).map((position) => (
        <div key={position} className="flex flex-col items-center gap-4">
          <Hitbox position={position} debug>
            <Checkbox />
          </Hitbox>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center gap-8 bg-background p-10">
      {(["sm", "default", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-4">
          <Hitbox size={size} debug>
            <Checkbox />
          </Hitbox>
          <p className="text-sm text-muted-foreground">{size}</p>
        </div>
      ))}
    </div>
  ),
}

export const DynamicSize: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center gap-8 bg-background p-10">
      <div className="flex flex-col items-center gap-4">
        <Hitbox size="24px" debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">24px custom size</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Hitbox size="32px" radius="full" debug>
          <Checkbox />
        </Hitbox>
        <p className="text-sm text-muted-foreground">32px full radius</p>
      </div>
    </div>
  ),
}