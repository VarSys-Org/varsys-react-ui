import type { Meta, StoryObj } from "@storybook/react"
import { LessonsSidebar } from "../../components/navigation/lessons-sidebar"

const meta: Meta<typeof LessonsSidebar> = {
  title: "Navigation/LessonsSidebar",
  component: LessonsSidebar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <LessonsSidebar />,
}

export const CustomGroups: Story = {
  render: () => (
    <LessonsSidebar
      height={600}
      groups={[
        {
          title: "Getting Started",
          lessons: [
            { name: "Welcome" },
            { name: "Project structure" },
            { name: "Your first component" },
          ],
        },
        {
          title: "Styling",
          lessons: [
            { name: "Design tokens" },
            { name: "Dark mode" },
            { name: "Tailwind setup" },
          ],
        },
      ]}
    />
  ),
}
