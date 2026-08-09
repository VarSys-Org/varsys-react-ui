import type { Meta, StoryObj } from "@storybook/react"
import {
  AnimatedSkeletonCard,
  CardSkeletonContainer,
  ClaudeLogo,
  OpenAILogo,
  GeminiLogo,
  MetaIconOutline,
} from "../../components/cards/animated-skeleton-card"

const meta: Meta<typeof AnimatedSkeletonCard> = {
  title: "Cards/AnimatedSkeletonCard",
  component: AnimatedSkeletonCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center p-8">
      <AnimatedSkeletonCard />
    </div>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <div className="mx-auto flex w-full max-w-sm items-center justify-center p-8">
      <AnimatedSkeletonCard
        title="AI Assistant"
        description="A card that showcases the AI tools behind your product."
      />
    </div>
  ),
}

export const Logos: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-6 p-8">
      <ClaudeLogo className="h-8 w-8" />
      <OpenAILogo className="h-8 w-8" />
      <GeminiLogo className="h-8 w-8" />
      <MetaIconOutline className="h-8 w-8" />
    </div>
  ),
}

export const SkeletonOnly: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <CardSkeletonContainer>
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Skeleton container
        </div>
      </CardSkeletonContainer>
    </div>
  ),
}
