import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { PromptInput } from "../../components/forms/prompt-input"

const meta: Meta<typeof PromptInput> = {
  title: "Forms/PromptInput",
  component: PromptInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <div className="w-full max-w-xl">
          <PromptInput
            value={value}
            onValueChange={setValue}
            onSubmit={(text) => console.log("submitted", text)}
            placeholder="Ask anything..."
          />
        </div>
      </div>
    )
  },
}

export const WithCounter: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <div className="w-full max-w-xl">
          <PromptInput
            value={value}
            onValueChange={setValue}
            onSubmit={(text) => console.log("submitted", text)}
            placeholder="Ask anything..."
            counter
            maxLength={500}
          />
        </div>
      </div>
    )
  },
}

export const Streaming: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const [streaming, setStreaming] = useState(false)
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <div className="w-full max-w-xl">
          <PromptInput
            value={value}
            onValueChange={setValue}
            status={streaming ? "streaming" : "idle"}
            onSubmit={(text) => {
              console.log("submitted", text)
              setStreaming(true)
            }}
            onStop={() => setStreaming(false)}
            placeholder="Ask anything..."
          />
        </div>
      </div>
    )
  },
}