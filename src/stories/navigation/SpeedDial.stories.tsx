import type { Meta, StoryObj } from "@storybook/react"
import {
  HomeIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  PlusIcon,
  SettingsIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react"
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialItem,
  SpeedDialLabel,
  SpeedDialTrigger,
} from "../../components/navigation/speed-dial"

const meta: Meta<typeof SpeedDial> = {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center">
      <SpeedDial>
        <SpeedDialTrigger>
          <PlusIcon className="transition-transform group-open:rotate-45" />
        </SpeedDialTrigger>
        <SpeedDialContent>
          <SpeedDialItem>
            <SpeedDialLabel>Message</SpeedDialLabel>
            <SpeedDialAction aria-label="Message">
              <MessageCircleIcon size={18} />
            </SpeedDialAction>
          </SpeedDialItem>
          <SpeedDialItem>
            <SpeedDialLabel>Share</SpeedDialLabel>
            <SpeedDialAction aria-label="Share">
              <ShareIcon size={18} />
            </SpeedDialAction>
          </SpeedDialItem>
          <SpeedDialItem>
            <SpeedDialLabel>Settings</SpeedDialLabel>
            <SpeedDialAction aria-label="Settings">
              <SettingsIcon size={18} />
            </SpeedDialAction>
          </SpeedDialItem>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center gap-24">
      {(["top", "bottom", "left", "right"] as const).map((side) => (
        <SpeedDial key={side} side={side}>
          <SpeedDialTrigger>
            <PlusIcon className="transition-transform group-open:rotate-45" />
          </SpeedDialTrigger>
          <SpeedDialContent>
            <SpeedDialItem>
              <SpeedDialLabel>Call</SpeedDialLabel>
              <SpeedDialAction aria-label="Call">
                <PhoneIcon size={18} />
              </SpeedDialAction>
            </SpeedDialItem>
            <SpeedDialItem>
              <SpeedDialLabel>Email</SpeedDialLabel>
              <SpeedDialAction aria-label="Email">
                <MailIcon size={18} />
              </SpeedDialAction>
            </SpeedDialItem>
          </SpeedDialContent>
        </SpeedDial>
      ))}
    </div>
  ),
}

export const HoverActivation: Story = {
  render: () => (
    <div className="flex h-[420px] items-center justify-center">
      <SpeedDial activationMode="hover">
        <SpeedDialTrigger>
          <PlusIcon className="transition-transform group-open:rotate-45" />
        </SpeedDialTrigger>
        <SpeedDialContent>
          <SpeedDialItem>
            <SpeedDialLabel>Home</SpeedDialLabel>
            <SpeedDialAction aria-label="Home">
              <HomeIcon size={18} />
            </SpeedDialAction>
          </SpeedDialItem>
          <SpeedDialItem>
            <SpeedDialLabel>Delete</SpeedDialLabel>
            <SpeedDialAction aria-label="Delete">
              <TrashIcon size={18} />
            </SpeedDialAction>
          </SpeedDialItem>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  ),
}