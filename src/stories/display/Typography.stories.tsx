import type { Meta, StoryObj } from "@storybook/react"
import { Title } from "../../components/display/title"
import { Subtitle } from "../../components/display/subtitle"
import { Bold } from "../../components/display/bold"
import { Italic } from "../../components/display/italic"

const meta: Meta = {
  title: "Display/Typography",
  tags: ["autodocs"],
}
export default meta

export const TitleSubtitle: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-lg space-y-2 p-8">
      <Title>This is a Title</Title>
      <Subtitle>
        This is a subtitle. It provides supporting context underneath the title of a section.
      </Subtitle>
    </div>
  ),
}

export const BoldItalic: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-lg space-y-3 p-8">
      <p className="text-sm text-foreground">
        Regular text with a <Bold>bold segment</Bold> and an <Italic>italic segment</Italic>.
      </p>
      <p className="text-sm text-muted-foreground">
        Muted text with a <Bold>bold</Bold> and <Italic>italic</Italic> inline.
      </p>
    </div>
  ),
}
