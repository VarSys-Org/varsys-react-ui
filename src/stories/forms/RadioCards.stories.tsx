import type { Meta, StoryObj } from "@storybook/react"
import {
  RadioCards,
  RadioCardsContent,
  RadioCardsIndicator,
  RadioCardsItem,
} from "../../components/forms/radio-cards"

const meta: Meta<typeof RadioCards> = {
  title: "Forms/RadioCards",
  component: RadioCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <RadioCards defaultValue="monthly">
        <RadioCardsItem value="monthly">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Monthly</span>
            <span className="text-muted-foreground">$12 / month</span>
          </RadioCardsContent>
        </RadioCardsItem>
        <RadioCardsItem value="yearly">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Yearly</span>
            <span className="text-muted-foreground">$96 / year (save 33%)</span>
          </RadioCardsContent>
        </RadioCardsItem>
        <RadioCardsItem value="lifetime">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Lifetime</span>
            <span className="text-muted-foreground">$199 one-time</span>
          </RadioCardsContent>
        </RadioCardsItem>
      </RadioCards>
    </div>
  ),
}

export const VerticalStack: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <RadioCards layout="stack" defaultValue="pro">
        <RadioCardsItem value="starter">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Starter</span>
            <span className="text-muted-foreground">$0 / month</span>
          </RadioCardsContent>
        </RadioCardsItem>
        <RadioCardsItem value="pro">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Pro</span>
            <span className="text-muted-foreground">$29 / month</span>
          </RadioCardsContent>
        </RadioCardsItem>
        <RadioCardsItem value="team">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Team</span>
            <span className="text-muted-foreground">$99 / month</span>
          </RadioCardsContent>
        </RadioCardsItem>
      </RadioCards>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <RadioCards>
        <RadioCardsItem value="a">
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Available</span>
            <span className="text-muted-foreground">This plan is active</span>
          </RadioCardsContent>
        </RadioCardsItem>
        <RadioCardsItem value="b" disabled>
          <RadioCardsIndicator />
          <RadioCardsContent>
            <span className="font-medium text-foreground">Unavailable</span>
            <span className="text-muted-foreground">This plan is locked</span>
          </RadioCardsContent>
        </RadioCardsItem>
      </RadioCards>
    </div>
  ),
}
