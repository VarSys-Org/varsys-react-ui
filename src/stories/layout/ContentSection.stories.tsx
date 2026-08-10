import type { Meta, StoryObj } from "@storybook/react"
import { ContentSection } from "../../components/layout/content-section"

const meta: Meta<typeof ContentSection> = {
  title: "Layout/ContentSection",
  component: ContentSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi."

const imageSrc =
  "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?auto=format&fit=crop&q=80&w=1160"

export const Half: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description,
    imageSrc,
    variant: "half",
  },
}

export const TextThird: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description,
    imageSrc,
    variant: "text-third",
  },
}

export const ImageThird: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description,
    imageSrc,
    variant: "image-third",
  },
}

export const Stacked: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description,
    imageSrc,
    variant: "stacked",
  },
}

export const Flipped: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description,
    imageSrc,
    variant: "half",
    flip: true,
  },
}
