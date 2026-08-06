import type { Meta, StoryObj } from "@storybook/react"
import {
  MegaMenu,
  MegaMenuColumn,
  MegaMenuContent,
  MegaMenuLink,
  MegaMenuTrigger,
} from "../../components/navigation/mega-menu"

const meta: Meta<typeof MegaMenu> = {
  title: "Navigation/MegaMenu",
  component: MegaMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <MegaMenu className="mx-auto max-w-3xl">
        <MegaMenuTrigger>Products</MegaMenuTrigger>
        <MegaMenuContent>
          <div className="grid gap-6 md:grid-cols-4">
            <MegaMenuColumn title="Analytics">
              <MegaMenuLink href="#" description="Real-time dashboards">
                Overview
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Build custom charts">
                Reports
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Track key metrics">
                Metrics
              </MegaMenuLink>
            </MegaMenuColumn>
            <MegaMenuColumn title="Collaboration">
              <MegaMenuLink href="#" description="Work together in real time">
                Boards
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Centralize your docs">
                Docs
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Chat with your team">
                Messages
              </MegaMenuLink>
            </MegaMenuColumn>
            <MegaMenuColumn title="Platform">
              <MegaMenuLink href="#" description="Connect your tools">
                Integrations
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Automate workflows">
                Automations
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Manage access">
                Permissions
              </MegaMenuLink>
            </MegaMenuColumn>
            <MegaMenuColumn title="Resources">
              <MegaMenuLink href="#" description="Read the documentation">
                Docs
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Browse the API reference">
                API
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Get support">
                Support
              </MegaMenuLink>
            </MegaMenuColumn>
          </div>
        </MegaMenuContent>
      </MegaMenu>
    </div>
  ),
}

export const WithFeaturedContent: Story = {
  render: () => (
    <div className="p-8">
      <MegaMenu className="mx-auto max-w-3xl">
        <MegaMenuTrigger>Solutions</MegaMenuTrigger>
        <MegaMenuContent>
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <MegaMenuColumn title="Industries">
              <MegaMenuLink href="#" description="Ship software faster">
                Engineering
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Delight your customers">
                Customer Success
              </MegaMenuLink>
              <MegaMenuLink href="#" description="Scale your operations">
                Operations
              </MegaMenuLink>
            </MegaMenuColumn>
            <div className="flex flex-col justify-between rounded-xl bg-muted p-6">
              <div>
                <p className="text-lg font-semibold text-foreground">
                  Get started with the free plan
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore all features at no cost, upgrade when your team grows.
                </p>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex w-fit rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start free
              </a>
            </div>
          </div>
        </MegaMenuContent>
      </MegaMenu>
    </div>
  ),
}
