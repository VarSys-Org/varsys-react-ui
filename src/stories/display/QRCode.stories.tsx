import type { Meta, StoryObj } from "@storybook/react"
import { QRCode } from "../../components/display/qr-code"

const meta: Meta<typeof QRCode> = {
  title: "Display/QRCode",
  component: QRCode,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <QRCode value="https://varsys.ai" />
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <QRCode value="https://varsys.ai" size={128} />
    </div>
  ),
}

export const Primary: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <QRCode
        value="https://varsys.ai"
        fgColor="var(--primary)"
        bgColor="var(--card)"
      />
    </div>
  ),
}

export const HighCorrection: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <QRCode
        value="https://varsys.ai"
        errorCorrectionLevel="H"
        size={220}
      />
    </div>
  ),
}