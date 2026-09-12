import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Button } from "../../components/buttons/button"
import {
  Tour,
  TourArrow,
  TourClose,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNext,
  TourPortal,
  TourPrev,
  TourSpotlight,
  TourSpotlightRing,
  TourStep,
  TourStepCounter,
  TourTitle,
} from "../../components/overlays/tour"

const meta: Meta<typeof Tour> = {
  title: "Overlays/Tour",
  component: Tour,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const stepFooter = (
  <TourFooter>
    <div className="flex w-full items-center justify-between">
      <TourStepCounter />
      <div className="flex gap-2">
        <TourPrev />
        <TourNext />
      </div>
    </div>
  </TourFooter>
)

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false)
      return (
        <div className="flex min-h-96 flex-col items-center justify-center gap-8 bg-background p-10">
          <div className="flex flex-col items-center gap-4">
            <h1 id="welcome-title" className="text-2xl font-bold">
              Welcome to your dashboard
            </h1>
            <p className="text-center text-muted-foreground">
              Take a quick tour to explore the key features
            </p>
            <Button id="start-tour-btn" onClick={() => setOpen(true)}>
              Start Tour
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div id="feature-1" className="rounded-lg border bg-card p-4 text-center">
              <h3 className="font-semibold">Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track your performance metrics
              </p>
            </div>
            <div id="feature-2" className="rounded-lg border bg-card p-4 text-center">
              <h3 className="font-semibold">Projects</h3>
              <p className="text-sm text-muted-foreground">
                Manage your active projects
              </p>
            </div>
            <div id="feature-3" className="rounded-lg border bg-card p-4 text-center">
              <h3 className="font-semibold">Team</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate with teammates
              </p>
            </div>
          </div>
          <Tour open={open} onOpenChange={setOpen} stepFooter={stepFooter}>
            <TourPortal>
              <TourSpotlight />
              <TourSpotlightRing />
              <TourStep target="#welcome-title" side="bottom" align="center">
                <TourHeader>
                  <TourTitle>Welcome!</TourTitle>
                  <TourDescription>
                    Let&apos;s walk through the main features of your dashboard
                    in just a few steps.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
              <TourStep target="#feature-1" side="top" align="center">
                <TourArrow />
                <TourHeader>
                  <TourTitle>Analytics dashboard</TourTitle>
                  <TourDescription>
                    View real-time insights, track KPIs, and monitor your
                    team&apos;s progress with interactive charts.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
              <TourStep target="#feature-2" side="top" align="center">
                <TourArrow />
                <TourHeader>
                  <TourTitle>Project management</TourTitle>
                  <TourDescription>
                    Create, organize, and track projects with powerful tools for
                    task management and deadlines.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
              <TourStep target="#feature-3" side="top" align="center" required>
                <TourArrow />
                <TourHeader>
                  <TourTitle>Team collaboration</TourTitle>
                  <TourDescription>
                    Invite members, assign roles, and collaborate seamlessly.
                    This step is required to continue.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
            </TourPortal>
          </Tour>
        </div>
      )
    }
    return <Demo />
  },
}

export const Dismissible: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true)
      return (
        <div className="flex min-h-96 flex-col items-center justify-center gap-8 bg-background p-10">
          <div className="grid grid-cols-2 gap-4">
            <div id="card-a" className="rounded-lg border bg-card p-6 text-center">
              <h3 className="font-semibold">Quick actions</h3>
              <p className="text-sm text-muted-foreground">Do things faster</p>
            </div>
            <div id="card-b" className="rounded-lg border bg-card p-6 text-center">
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">Stay in the loop</p>
            </div>
          </div>
          <Tour open={open} onOpenChange={setOpen} dismissible>
            <TourPortal>
              <TourSpotlight />
              <TourStep target="#card-a" side="right" align="center">
                <TourArrow />
                <TourHeader>
                  <TourTitle>Dismissible tour</TourTitle>
                  <TourDescription>
                    Click anywhere outside this card or press Escape to dismiss
                    the tour.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
              <TourStep target="#card-b" side="left" align="center">
                <TourHeader>
                  <TourTitle>Second step</TourTitle>
                  <TourDescription>
                    This step highlights the notifications panel.
                  </TourDescription>
                </TourHeader>
                <TourClose />
              </TourStep>
            </TourPortal>
          </Tour>
        </div>
      )
    }
    return <Demo />
  },
}

export const CustomFooter: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true)
      return (
        <div className="flex min-h-96 flex-col items-center justify-center gap-8 bg-background p-10">
          <div id="custom-target" className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-lg font-semibold">Custom footer</h3>
            <p className="text-sm text-muted-foreground">
              Override the footer with your own controls
            </p>
          </div>
          <Tour
            open={open}
            onOpenChange={setOpen}
            stepFooter={
              <TourFooter>
                <div className="flex w-full items-center justify-between">
                  <TourStepCounter format={(current, total) => `${current} of ${total}`} />
                  <div className="flex items-center gap-2">
                    <TourPrev />
                    <TourNext />
                  </div>
                </div>
              </TourFooter>
            }
          >
            <TourPortal>
              <TourSpotlight />
              <TourSpotlightRing />
              <TourStep target="#custom-target" side="bottom" align="center">
                <TourHeader>
                  <TourTitle>First step</TourTitle>
                  <TourDescription>
                    This step uses a custom footer with a different counter
                    format.
                  </TourDescription>
                </TourHeader>
              </TourStep>
              <TourStep target="#custom-target" side="bottom" align="center">
                <TourHeader>
                  <TourTitle>Second step</TourTitle>
                  <TourDescription>
                    Finish the tour to trigger the completion callback.
                  </TourDescription>
                </TourHeader>
              </TourStep>
            </TourPortal>
          </Tour>
        </div>
      )
    }
    return <Demo />
  },
}