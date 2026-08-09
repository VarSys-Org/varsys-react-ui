import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "../../components/navigation/link"

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <p className="text-muted-foreground">
        Visit the{" "}
        <Link href="https://ui.shadcn.com">documentation</Link> for more
        information.
      </p>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 p-8">
      <Link href="#default">Default link</Link>
      <Link href="#external" target="_blank" rel="noreferrer">
        External link
      </Link>
      <Link href="#custom" className="text-destructive">
        Destructive colored link
      </Link>
    </div>
  ),
}
