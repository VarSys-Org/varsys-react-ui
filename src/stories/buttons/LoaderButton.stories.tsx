import type { Meta, StoryObj } from "@storybook/react"
import { CloudDownload, Heart } from "lucide-react"

import { LoaderButton } from "../../components/buttons/loader-button"

const meta: Meta<typeof LoaderButton> = {
  title: "Buttons/LoaderButton",
  component: LoaderButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "Save changes", loading: true },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <LoaderButton loading>Default</LoaderButton>
      <LoaderButton loading variant="outline">
        Outline
      </LoaderButton>
      <LoaderButton loading variant="secondary">
        Secondary
      </LoaderButton>
      <LoaderButton loading variant="destructive">
        Destructive
      </LoaderButton>
      <LoaderButton loading variant="ghost">
        Ghost
      </LoaderButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <LoaderButton size="xs" loading>
        Extra small
      </LoaderButton>
      <LoaderButton size="sm" loading>
        Small
      </LoaderButton>
      <LoaderButton size="default" loading>
        Default
      </LoaderButton>
      <LoaderButton size="lg" loading>
        Large
      </LoaderButton>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <LoaderButton loading>
        <CloudDownload />
        Syncing
      </LoaderButton>
      <LoaderButton variant="outline" loading>
        <Heart />
        Saving to favorites
      </LoaderButton>
    </div>
  ),
}

export const LoadingText: Story = {
  args: {
    loading: true,
    loadingText: "Uploading file…",
    children: "Upload",
  },
}