import * as ComponentModule from "../../components/cards/card-stack"

const meta = {
  title: "Coverage/Cards/CardStack",
  component: ComponentModule.CardStack,
}
export default meta

export const Default = {
  args: {"items":[{"id":"first","title":"First card","description":"A compact card preview","image":"/logo.png"},{"id":"second","title":"Second card","description":"A second card preview","image":"/logo.png"}],"children":"VarSys UI preview"},
}
