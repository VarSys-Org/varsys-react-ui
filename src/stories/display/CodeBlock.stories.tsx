import type { Meta, StoryObj } from "@storybook/react"
import { CodeBlock } from "../../components/display/code-block"

const meta: Meta<typeof CodeBlock> = { title: "Display/CodeBlock", component: CodeBlock, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

export const Simple = {
  render: () => (
    <CodeBlock
      language="tsx"
      filename="example.tsx"
      code={`const greeting = "Hello World";\nconsole.log(greeting);`}
    />
  ),
}

export const WithTabs = {
  render: () => (
    <CodeBlock
      language="tsx"
      filename="example.tsx"
      tabs={[
        { name: "Component.tsx", code: `const App = () => <div>Hello</div>;`, language: "tsx" },
        { name: "styles.css", code: `.app { color: red; }`, language: "css" },
      ]}
    />
  ),
}
