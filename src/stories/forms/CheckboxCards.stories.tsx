import type { Meta, StoryObj } from "@storybook/react"
import {
  CheckboxCards,
  CheckboxCardsContent,
  CheckboxCardsIndicator,
  CheckboxCardsItem,
} from "../../components/forms/checkbox-cards"

const meta: Meta<typeof CheckboxCards> = {
  title: "Forms/CheckboxCards",
  component: CheckboxCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <CheckboxCards defaultValue={["vscode"]}>
        <CheckboxCardsItem value="vscode">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Visual Studio Code</span>
            <span className="text-muted-foreground">
              Free, built on open source. Integrates with Git.
            </span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
        <CheckboxCardsItem value="intellij">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">IntelliJ IDEA</span>
            <span className="text-muted-foreground">
              Capable and ergonomic IDE for JVM languages.
            </span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
        <CheckboxCardsItem value="neovim">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Neovim</span>
            <span className="text-muted-foreground">
              Vim-fork focused on extensibility and usability.
            </span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
      </CheckboxCards>
    </div>
  ),
}

export const VerticalStack: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <CheckboxCards layout="stack" defaultValue={["starter"]}>
        <CheckboxCardsItem value="starter">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Starter</span>
            <span className="text-muted-foreground">$0 / month</span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
        <CheckboxCardsItem value="pro">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Pro</span>
            <span className="text-muted-foreground">$29 / month</span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
        <CheckboxCardsItem value="team">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Team</span>
            <span className="text-muted-foreground">$99 / month</span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
      </CheckboxCards>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <CheckboxCards disabled>
        <CheckboxCardsItem value="a">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Option A</span>
            <span className="text-muted-foreground">Unavailable</span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
        <CheckboxCardsItem value="b">
          <CheckboxCardsIndicator />
          <CheckboxCardsContent>
            <span className="font-medium text-foreground">Option B</span>
            <span className="text-muted-foreground">Unavailable</span>
          </CheckboxCardsContent>
        </CheckboxCardsItem>
      </CheckboxCards>
    </div>
  ),
}
