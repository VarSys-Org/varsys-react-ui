import type { Meta, StoryObj } from "@storybook/react"
import { RadioCardGroup, RadioCardItem, RadioCardIndicator } from "../../components/forms/radio-card-group"

const meta: Meta<typeof RadioCardGroup> = {
  title: "Forms/RadioCardGroup",
  component: RadioCardGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-56 items-center justify-center p-8">
      <RadioCardGroup className="w-full max-w-sm" defaultValue="monthly">
        <RadioCardItem value="monthly">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">Monthly</p>
              <p className="text-sm text-muted-foreground">$12 / month</p>
            </div>
            <RadioCardIndicator />
          </div>
        </RadioCardItem>
        <RadioCardItem value="yearly">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">Yearly</p>
              <p className="text-sm text-muted-foreground">$96 / year (save 33%)</p>
            </div>
            <RadioCardIndicator />
          </div>
        </RadioCardItem>
        <RadioCardItem value="lifetime">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-foreground">Lifetime</p>
              <p className="text-sm text-muted-foreground">$199 one-time</p>
            </div>
            <RadioCardIndicator />
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center p-8">
      <RadioCardGroup className="w-full max-w-sm" defaultValue="a">
        <RadioCardItem value="a">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Available plan</span>
            <RadioCardIndicator />
          </div>
        </RadioCardItem>
        <RadioCardItem value="b" disabled>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Unavailable plan</span>
            <RadioCardIndicator />
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    </div>
  ),
}
