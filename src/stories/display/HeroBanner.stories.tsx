import type { Meta, StoryObj } from "@storybook/react"
import { HeroBanner } from "../../components/display/hero-banner"

const meta: Meta<typeof HeroBanner> = {
  title: "Display/HeroBanner",
  component: HeroBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Center: Story = {
  args: {
    title: "Understand user flow and ",
    highlight: "increase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.",
    primaryAction: "Get Started",
    secondaryAction: "Learn More",
    align: "center",
  },
}

export const Left: Story = {
  args: {
    title: "Understand user flow and ",
    highlight: "increase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.",
    primaryAction: "Get Started",
    secondaryAction: "Learn More",
    align: "left",
  },
}

export const WithImage: Story = {
  args: {
    title: "Understand user flow and ",
    highlight: "increase",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.",
    primaryAction: "Get Started",
    secondaryAction: "Learn More",
    align: "left",
    imageSrc:
      "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?auto=format&fit=crop&q=80&w=1160",
  },
}

export const Minimal: Story = {
  args: {
    title: "Ship faster with our platform",
    primaryAction: "Get Started",
    align: "center",
  },
}
