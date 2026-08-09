import type { Meta, StoryObj } from "@storybook/react"
import {
  BentoFeatures,
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
} from "../../components/layout/bento-features"

const meta: Meta<typeof BentoFeatures> = {
  title: "Layout/BentoFeatures",
  component: BentoFeatures,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const features = [
  {
    title: "Track issues effectively",
    description:
      "Track and manage your project issues with ease using our intuitive interface.",
    skeleton: <SkeletonOne />,
    className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
  },
  {
    title: "Capture pictures with AI",
    description: "Capture stunning photos effortlessly using our advanced AI technology.",
    skeleton: <SkeletonTwo />,
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
  },
  {
    title: "Watch our AI on YouTube",
    description:
      "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
    skeleton: <SkeletonThree />,
    className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
  },
  {
    title: "Deploy in seconds",
    description:
      "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
    skeleton: <SkeletonFour />,
    className: "col-span-1 lg:col-span-3 border-b lg:border-none",
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <BentoFeatures features={features} />
    </div>
  ),
}
