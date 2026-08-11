import type { Meta, StoryObj } from "@storybook/react"
import { TrendingUp, TrendingDown, Minus, Settings2 } from "lucide-react"
import { BadgeDelta } from "../../components/display/badge-delta"
import { Icon } from "../../components/display/icon"

const meta: Meta = {
  title: "Display/BadgeDeltaIcon",
  tags: ["autodocs"],
}
export default meta

export const DeltaVariants: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-3 p-8">
      <BadgeDelta deltaType="increase" tooltip="Increase">+12.5%</BadgeDelta>
      <BadgeDelta deltaType="moderateIncrease" tooltip="Moderate increase">+4.2%</BadgeDelta>
      <BadgeDelta deltaType="decrease" tooltip="Decrease">-8.1%</BadgeDelta>
      <BadgeDelta deltaType="moderateDecrease" tooltip="Moderate decrease">-2.3%</BadgeDelta>
      <BadgeDelta deltaType="unchanged" tooltip="Unchanged">0.0%</BadgeDelta>
    </div>
  ),
}

export const DeltaSizes: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-3 p-8">
      <BadgeDelta size="xs">+1.2%</BadgeDelta>
      <BadgeDelta size="sm">+1.2%</BadgeDelta>
      <BadgeDelta size="md">+1.2%</BadgeDelta>
      <BadgeDelta size="lg">+1.2%</BadgeDelta>
      <BadgeDelta size="xl">+1.2%</BadgeDelta>
    </div>
  ),
}

export const DeltaIconOnly: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md flex gap-2 p-8">
      <BadgeDelta deltaType="increase" iconOnly />
      <BadgeDelta deltaType="decrease" iconOnly />
      <BadgeDelta deltaType="unchanged" iconOnly />
    </div>
  ),
}

export const IconVariants: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md space-y-3 p-8">
      <div className="flex items-center gap-2">
        <Icon icon={TrendingUp} variant="simple" />
        <Icon icon={Settings2} variant="light" />
        <Icon icon={Settings2} variant="shadow" />
        <Icon icon={Settings2} variant="solid" />
        <Icon icon={Settings2} variant="outlined" />
      </div>
    </div>
  ),
}

export const IconSizes: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md flex items-center gap-2 p-8">
      <Icon icon={TrendingUp} size="xs" variant="light" />
      <Icon icon={TrendingUp} size="sm" variant="light" />
      <Icon icon={TrendingUp} size="md" variant="light" />
      <Icon icon={TrendingUp} size="lg" variant="light" />
      <Icon icon={TrendingUp} size="xl" variant="light" />
    </div>
  ),
}

export const IconWithTooltip: StoryObj = {
  render: () => (
    <div className="mx-auto w-full max-w-md flex gap-2 p-8">
      <Icon icon={TrendingUp} tooltip="Trending up" variant="light" />
      <Icon icon={TrendingDown} tooltip="Trending down" variant="solid" />
      <Icon icon={Minus} tooltip="Flat" variant="outlined" />
    </div>
  ),
}
