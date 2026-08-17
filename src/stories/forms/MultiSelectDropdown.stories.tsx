import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { MultiSelect } from "../../components/forms/multi-select"

const meta: Meta<typeof MultiSelect> = {
  title: "Forms/MultiSelectDropdown",
  component: MultiSelect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solid", label: "Solid" },
  { value: "qwik", label: "Qwik" },
  { value: "astro", label: "Astro" },
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "sveltekit", label: "SvelteKit" },
]

function Demo() {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className="w-full max-w-md space-y-8 p-8">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <MultiSelect
          options={options}
          value={value}
          onValueChange={setValue}
          label="Framework"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">With max selection (3)</p>
        <MultiSelect
          options={options}
          maxSelected={3}
          label="Pick up to 3"
          placeholder="Choose frameworks..."
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Disabled</p>
        <MultiSelect options={options} value={["react"]} disabled />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Error state</p>
        <MultiSelect options={options} error placeholder="Required field..." />
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <Demo />,
}

export const Preselected: Story = {
  render: () => (
    <div className="w-full max-w-md p-8">
      <MultiSelect
        options={options}
        value={["react", "next"]}
        onValueChange={() => {}}
      />
    </div>
  ),
}

export const NonPortal: Story = {
  render: () => (
    <div className="w-full max-w-md p-8">
      <MultiSelect
        options={options}
        portal={false}
        placeholder="Dropdown renders inline"
      />
    </div>
  ),
}