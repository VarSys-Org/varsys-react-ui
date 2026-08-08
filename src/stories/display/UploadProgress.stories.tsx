import type { Meta, StoryObj } from "@storybook/react"
import { UploadProgress } from "../../components/display/upload-progress"
import type { UploadFile } from "../../components/display/upload-progress"

const meta: Meta<typeof UploadProgress> = {
  title: "Display/UploadProgress",
  component: UploadProgress,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const files: UploadFile[] = [
  { id: "1", name: "design-final.fig", size: 4_800_000, status: "complete" },
  {
    id: "2",
    name: "recording-04.mp4",
    size: 512_000_000,
    progress: 64,
    status: "uploading",
  },
  {
    id: "3",
    name: "assets-bundle.zip",
    size: 128_000_000,
    progress: 0,
    status: "queued",
  },
  { id: "4", name: "broken-file.pdf", size: 24_000, status: "error" },
]

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-lg p-8">
      <UploadProgress files={files} />
    </div>
  ),
}

export const MixedStates: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-lg p-8">
      <UploadProgress
        files={[
          { id: "1", name: "report-q3.pdf", size: 2_400_000, status: "complete" },
          {
            id: "2",
            name: "screenshot-grid.png",
            size: 890_000,
            progress: 27,
            status: "uploading",
          },
          { id: "3", name: "data-export.csv", size: 12_000_000, status: "queued" },
        ]}
      />
    </div>
  ),
}

export const WithoutCancel: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-lg p-8">
      <UploadProgress showCancel={false} files={files.slice(0, 3)} />
    </div>
  ),
}
