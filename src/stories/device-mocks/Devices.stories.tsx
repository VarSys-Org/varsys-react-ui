import type { Meta, StoryObj } from "@storybook/react"
import {
  BrowserWindow,
  Devices,
  PhoneMockup,
} from "../../components/device-mocks/devices"

const meta: Meta<typeof Devices> = {
  title: "DeviceMocks/Devices",
  component: Devices,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Devices
        browser={
          <BrowserWindow address="https://varsys.dev/dashboard">
            <div className="flex h-80 items-center justify-center rounded-b-xl bg-muted">
              <p className="text-sm text-muted-foreground">Browser screenshot area</p>
            </div>
          </BrowserWindow>
        }
        phone={
          <PhoneMockup>
            <div className="flex h-[30rem] w-52 items-center justify-center bg-muted pt-6">
              <p className="text-xs text-muted-foreground">Phone screen</p>
            </div>
          </PhoneMockup>
        }
      />
    </div>
  ),
}

export const BrowserOnly: Story = {
  render: () => (
    <div className="p-8">
      <BrowserWindow address="https://varsys.dev/dashboard">
        <div className="grid h-64 grid-cols-3 gap-2 bg-muted/40 p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-md bg-muted" />
          ))}
        </div>
      </BrowserWindow>
    </div>
  ),
}

export const PhoneOnly: Story = {
  render: () => (
    <div className="p-8">
      <PhoneMockup>
        <div className="flex h-[28rem] w-48 items-center justify-center bg-muted pt-6">
          <p className="text-xs text-muted-foreground">App screen</p>
        </div>
      </PhoneMockup>
    </div>
  ),
}
