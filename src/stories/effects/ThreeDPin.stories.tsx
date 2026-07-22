import type { Meta, StoryObj } from "@storybook/react"
import { PinContainer } from "../../components/effects/3d-pin"

const meta: Meta<typeof PinContainer> = {
  title: "Effects/3DPin",
  component: PinContainer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[40rem] w-full items-center justify-center">
      <PinContainer title="ui.aceternity.com" href="https://ui.aceternity.com">
        <div className="flex w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
          3D Pin Component
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Hover over this to see the 3D pin perspective effect.
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  ),
}
