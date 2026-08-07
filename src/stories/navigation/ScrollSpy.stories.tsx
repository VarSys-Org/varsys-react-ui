import type { Meta, StoryObj } from "@storybook/react"
import { ScrollSpy } from "../../components/navigation/scroll-spy"

const meta: Meta<typeof ScrollSpy> = {
  title: "Navigation/ScrollSpy",
  component: ScrollSpy,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const sections = [
  {
    id: "first",
    label: "First",
    content: (
      <div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">First section</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia.
        </p>
      </div>
    ),
  },
  {
    id: "second",
    label: "Second",
    content: (
      <div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">Second section</h2>
        <p className="text-muted-foreground">
          Cupiditate officia ad maiores dignissimos porro, distinctio ut minima.
        </p>
      </div>
    ),
  },
  {
    id: "third",
    label: "Third",
    content: (
      <div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">Third section</h2>
        <p className="text-muted-foreground">
          Error magni quos a placeat atque rerum, itaque laborum quisquam.
        </p>
      </div>
    ),
  },
  {
    id: "fourth",
    label: "Fourth",
    content: (
      <div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">Fourth section</h2>
        <p className="text-muted-foreground">
          Assumenda, accusantium. Quisquam nulla alias beatae modi eum.
        </p>
      </div>
    ),
  },
]

const tallSections = sections.map((section) => ({
  ...section,
  content: (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-foreground">
        {section.label} section
      </h2>
      <div className="h-64 rounded-md bg-muted" />
    </div>
  ),
}))

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ScrollSpy sections={tallSections} />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="p-8">
      <ScrollSpy sections={tallSections} layout="vertical" />
    </div>
  ),
}
