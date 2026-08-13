import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useRef } from "react"
import {
  Minimap,
  MinimapBubble,
  MinimapItem,
  MinimapProvider,
  MinimapTrack,
} from "../../components/scroll/minimap"

const meta: Meta<typeof Minimap> = {
  title: "Scroll/Minimap",
  component: Minimap,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { position: 0.02, label: "Hero" },
  { position: 0.18, label: "Features" },
  { position: 0.36, label: "Pricing" },
  { position: 0.55, label: "FAQ" },
  { position: 0.78, label: "Team" },
  { position: 0.94, label: "Footer" },
]

const ScrollableContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-64 w-full overflow-y-auto rounded-lg border border-border bg-muted/30 p-4"
      style={{ maxHeight: 320 }}
    >
      <div className="space-y-24">{children}</div>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex max-w-lg gap-4 p-8">
      <ScrollableContent>
        {items.map((item) => (
          <div key={item.label}>
            <h3 className="text-lg font-semibold text-foreground">
              {item.label}
            </h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </ScrollableContent>
      <Minimap height={200}>
        <MinimapTrack>
          {items.map((item) => (
            <MinimapItem
              key={item.label}
              position={item.position}
              title={item.label}
            />
          ))}
        </MinimapTrack>
      </Minimap>
    </div>
  ),
}

export const WithBubble: Story = {
  render: () => (
    <div className="mx-auto flex max-w-lg gap-4 p-8">
      <ScrollableContent>
        {items.map((item) => (
          <div key={item.label}>
            <h3 className="text-lg font-semibold text-foreground">
              {item.label}
            </h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </ScrollableContent>
      <div className="flex flex-col items-center gap-2">
        <Minimap height={200} />
        <MinimapBubble />
      </div>
    </div>
  ),
}

export const CustomContainer: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const container = containerRef.current
      if (!container) return
      container.scrollTop = container.scrollHeight / 3
    }, [])

    return (
      <div className="mx-auto flex max-w-lg gap-4 p-8">
        <div
          ref={containerRef}
          className="h-64 w-full overflow-y-auto rounded-lg border border-border bg-muted/30 p-4"
        >
          <div className="space-y-24">
            {items.map((item) => (
              <div key={item.label}>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
        <MinimapProvider scrollRef={containerRef}>
          <Minimap height={200} />
        </MinimapProvider>
      </div>
    )
  },
}
