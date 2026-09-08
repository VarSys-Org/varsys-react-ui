import type { Meta, StoryObj } from "@storybook/react"
import { ScrollExpand } from "../../components/effects/scroll-expand"

const meta: Meta<typeof ScrollExpand> = {
  title: "Effects/ScrollExpand",
  component: ScrollExpand,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Image: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="h-[520px]">
        <ScrollExpand
          src="https://picsum.photos/seed/varsys-industrial/1200/1600"
          alt="Industrial preview"
          title="Scroll to expand"
          scrollHint="Scroll down"
          className="rounded-2xl border border-border"
        />
      </div>
    </div>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <div className="h-[520px]">
        <ScrollExpand
          src="https://picsum.photos/seed/varsys-console/1200/1600"
          alt="Console preview"
          startWidth={30}
          startHeight={46}
          className="rounded-2xl border border-border"
        >
          <div className="flex flex-col items-center gap-3 text-foreground">
            <span className="text-2xl font-bold">Overlay headline</span>
            <span className="text-sm text-muted-foreground">Appears as the media expands</span>
          </div>
        </ScrollExpand>
      </div>
    </div>
  ),
}