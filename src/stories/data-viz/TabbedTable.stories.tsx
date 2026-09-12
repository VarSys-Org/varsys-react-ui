import type { Meta, StoryObj } from "@storybook/react"
import { TabbedTable } from "../../components/data-viz/tabbed-table"

const meta: Meta<typeof TabbedTable> = {
  title: "DataViz/TabbedTable",
  component: TabbedTable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const tabs = [
  {
    label: "Pages",
    heading: "Top pages",
    items: [
      { label: "https://www.google.com", value: "129", status: "Good" },
      { label: "https://www.youtube.com", value: "798", status: "Normal" },
      { label: "https://www.github.com", value: "399", status: "Great" },
      { label: "https://www.floatui.com", value: "678", status: "Bad" },
    ],
  },
  {
    label: "Countries",
    heading: "Top countries",
    items: [
      { label: "Mauritania", value: "203", status: "Good" },
      { label: "United State America", value: "408", status: "Great" },
      { label: "France", value: "99", status: "Bad" },
      { label: "Germany", value: "320", status: "Normal" },
    ],
  },
  {
    label: "Devices",
    heading: "Top devices",
    items: [
      { label: "Android", value: "360", status: "Normal" },
      { label: "Linux", value: "190", status: "Good" },
      { label: "Macbook", value: "129", status: "Good" },
      { label: "Windows", value: "50", status: "Bad" },
    ],
  },
]

export const Default: Story = {
  render: () => <TabbedTable tabs={tabs} title="Reports" />,
}

export const WithDescription: Story = {
  render: () => (
    <TabbedTable
      tabs={tabs}
      title="Reports"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    />
  ),
}

export const WithoutStatus: Story = {
  render: () => (
    <TabbedTable
      title="Top referrers"
      tabs={[
        {
          label: "Weekly",
          heading: "Source",
          items: [
            { label: "Organic search", value: "4,203" },
            { label: "Direct", value: "1,985" },
            { label: "Referral", value: "987" },
          ],
        },
      ]}
    />
  ),
}