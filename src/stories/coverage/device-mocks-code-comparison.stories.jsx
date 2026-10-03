import * as ComponentModule from "../../components/device-mocks/code-comparison"

const meta = {
  title: "Coverage/Device Mocks/CodeComparison",
  component: ComponentModule.CodeComparison,
}
export default meta

export const Default = {
  args: {"beforeCode":"const total = 1","afterCode":"const total = 2","language":"tsx","filename":"total.tsx","lightTheme":"github-light","darkTheme":"github-dark","children":"VarSys UI preview"},
}
