import type { Meta, StoryObj } from "@storybook/react"
import { ScriptCopyBtn } from "../../components/buttons/script-copy-btn"

const meta: Meta<typeof ScriptCopyBtn> = {
  title: "Buttons/ScriptCopyBtn",
  component: ScriptCopyBtn,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const commandMap = {
  npm: "npm run shadcn add button",
  yarn: "yarn shadcn add button",
  pnpm: "pnpm dlx shadcn@latest add button",
  bun: "bun x shadcn@latest add button",
}

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ScriptCopyBtn
        showMultiplePackageOptions
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={commandMap}
      />
    </div>
  ),
}

export const SinglePackage: Story = {
  render: () => (
    <div className="p-8">
      <ScriptCopyBtn
        showMultiplePackageOptions={false}
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={{ npm: "npm install @varsys/ui" }}
      />
    </div>
  ),
}

export const CustomCommand: Story = {
  render: () => (
    <div className="p-8">
      <ScriptCopyBtn
        codeLanguage="bash"
        lightTheme="github-light"
        darkTheme="github-dark"
        commandMap={{
          npm: "npm install lucide-react",
          pnpm: "pnpm add lucide-react",
        }}
      />
    </div>
  ),
}