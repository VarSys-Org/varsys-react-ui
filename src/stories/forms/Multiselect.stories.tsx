import type { Meta, StoryObj } from "@storybook/react"
import {
  Multiselect,
  type Option,
} from "../../components/forms/multiselect"

const meta: Meta<typeof Multiselect> = {
  title: "Forms/Multiselect",
  component: Multiselect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const frameworkOptions: Option[] = [
  { label: "Next.js", value: "nextjs" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Astro", value: "astro" },
  { label: "Remix", value: "remix" },
  { label: "Nuxt", value: "nuxt" },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-80 items-start justify-center p-6">
      <div className="w-full max-w-md">
        <Multiselect
          placeholder="Select frameworks"
          options={frameworkOptions}
        />
      </div>
    </div>
  ),
}

export const WithDefaultValues: Story = {
  render: () => (
    <div className="flex h-80 items-start justify-center p-6">
      <div className="w-full max-w-md">
        <Multiselect
          defaultOptions={[frameworkOptions[0], frameworkOptions[1]]}
          options={frameworkOptions}
          placeholder="Select frameworks"
        />
      </div>
    </div>
  ),
}

export const Grouped: Story = {
  render: () => (
    <div className="flex h-80 items-start justify-center p-6">
      <div className="w-full max-w-md">
        <Multiselect
          options={[
            { label: "Next.js", value: "nextjs", type: "Framework" },
            { label: "React", value: "react", type: "Framework" },
            { label: "Vue", value: "vue", type: "Framework" },
            { label: "Node", value: "node", type: "Runtime" },
            { label: "Deno", value: "deno", type: "Runtime" },
            { label: "Bun", value: "bun", type: "Runtime" },
          ]}
          groupBy="type"
          placeholder="Select technologies"
        />
      </div>
    </div>
  ),
}

export const Creatable: Story = {
  render: () => (
    <div className="flex h-80 items-start justify-center p-6">
      <div className="w-full max-w-md">
        <Multiselect
          creatable
          options={frameworkOptions}
          placeholder="Select or create a framework"
        />
      </div>
    </div>
  ),
}
