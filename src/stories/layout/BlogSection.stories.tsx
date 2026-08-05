import type { Meta, StoryObj } from "@storybook/react"
import { BlogSection } from "../../components/layout/blog-section"

const meta: Meta<typeof BlogSection> = {
  title: "Layout/BlogSection",
  component: BlogSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const posts = [
  {
    title: "What is SaaS? Software as a Service Explained",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, I'm still surprised that this has happened. But we are surprised because we are so surprised.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, okay, and write it in their little reading notebooks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
  },
]

export const Default: Story = {
  render: () => <BlogSection posts={posts} />,
}
