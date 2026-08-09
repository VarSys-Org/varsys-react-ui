import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "../../components/display/heading"

const meta: Meta<typeof Heading> = {
  title: "Display/Heading",
  component: Heading,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Levels: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 p-8">
      <Heading as="h1">Heading One</Heading>
      <Heading as="h2">Heading Two</Heading>
      <Heading as="h3">Heading Three</Heading>
      <Heading as="h4">Heading Four</Heading>
      <Heading as="h5">Heading Five</Heading>
      <Heading as="h6">Heading Six</Heading>
    </div>
  ),
}

export const Custom: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <Heading as="h2" className="text-primary">
        Custom Styled Heading
      </Heading>
    </div>
  ),
}
