import type { Meta, StoryObj } from "@storybook/react"
import { Marker, MarkerContent, MarkerIcon } from "../../components/display/marker"
import { GitBranchIcon, SearchIcon, CheckIcon } from "lucide-react"

const meta: Meta<typeof Marker> = {
  title: "Display/Marker",
  component: Marker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Marker>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Marker>
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Marker>
        <MarkerContent>Default marker for inline notes</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>A border marker for row boundaries</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
    </div>
  ),
}

export const Status: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Marker role="status">
        <MarkerIcon>
          <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </MarkerIcon>
        <MarkerContent>Thinking...</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>Syncing completed</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <SearchIcon />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
    </div>
  ),
}
