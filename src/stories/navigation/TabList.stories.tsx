import type { Meta, StoryObj } from "@storybook/react"
import { Tab, TabList } from "../../components/navigation/tab-list"
import { TabPanel, TabPanels } from "../../components/navigation/tab-panels"

const meta: Meta<typeof TabList> = {
  title: "Navigation/TabList",
  component: TabList,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Line: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center px-8">
      <TabPanels className="w-full max-w-lg" defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <div className="p-4">
          <TabPanel value="overview">Overview content</TabPanel>
          <TabPanel value="activity">Activity content</TabPanel>
          <TabPanel value="settings">Settings content</TabPanel>
        </div>
      </TabPanels>
    </div>
  ),
}

export const Solid: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center px-8">
      <TabPanels className="w-full max-w-lg" defaultValue="overview" variant="solid">
        <TabList className="justify-center">
          <Tab value="overview">Overview</Tab>
          <Tab value="activity">Activity</Tab>
          <Tab value="settings">Settings</Tab>
        </TabList>
        <div className="p-4">
          <TabPanel value="overview">Overview content</TabPanel>
          <TabPanel value="activity">Activity content</TabPanel>
          <TabPanel value="settings">Settings content</TabPanel>
        </div>
      </TabPanels>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center px-8">
      <TabPanels className="w-full max-w-lg" value="billing">
        <TabList>
          <Tab value="billing">Billing</Tab>
          <Tab value="usage">Usage</Tab>
        </TabList>
        <div className="p-4">
          <TabPanel value="billing">Billing content</TabPanel>
          <TabPanel value="usage">Usage content</TabPanel>
        </div>
      </TabPanels>
    </div>
  ),
}