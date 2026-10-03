import * as ComponentModule from "../../components/display/tracker"

const meta = {
  title: "Coverage/Display/Tracker",
  component: ComponentModule.Tracker,
}
export default meta

export const Default = {
  args: {"data":[{"color":"var(--primary)","tooltip":"Complete"},{"color":"var(--muted)","tooltip":"Pending"}],"children":"VarSys UI preview"},
}
