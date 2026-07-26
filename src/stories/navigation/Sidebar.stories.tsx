import type { Meta, StoryObj } from "@storybook/react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarSeparator,
} from "../../components/navigation/sidebar"
import { Button } from "../../components/buttons/button"
import {
  HomeIcon,
  InboxIcon,
  CalendarIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

const meta: Meta<typeof SidebarProvider> = {
  title: "Navigation/Sidebar",
  component: SidebarProvider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { icon: HomeIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: SearchIcon, label: "Search" },
  { icon: UserIcon, label: "Profile" },
  { icon: SettingsIcon, label: "Settings" },
]

export const Default: Story = {
  render: () => (
    <div className="h-[400px] border rounded-md overflow-hidden">
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-full">
          <Sidebar>
            <SidebarHeader>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton asChild>
                          <a href="#">
                            <item.icon />
                            <span>{item.label}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarSeparator />
            <SidebarFooter>
              <SidebarMenuButton asChild>
                <a href="#">
                  <SettingsIcon />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-6">
            <h2 className="text-lg font-semibold">Main Content</h2>
            <p className="text-muted-foreground">
              Your main content goes here. The sidebar is on the left.
            </p>
          </main>
        </div>
      </SidebarProvider>
    </div>
  ),
}

export const Collapsed: Story = {
  render: () => (
    <div className="h-[400px] border rounded-md overflow-hidden">
      <SidebarProvider defaultOpen={false}>
        <div className="flex h-full">
          <Sidebar collapsible="icon">
            <SidebarHeader>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton tooltip={item.label} asChild>
                          <a href="#">
                            <item.icon />
                            <span>{item.label}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 p-6">
            <h2 className="text-lg font-semibold">Main Content</h2>
            <p className="text-muted-foreground">
              The sidebar starts collapsed. Hover to expand.
            </p>
          </main>
        </div>
      </SidebarProvider>
    </div>
  ),
}
