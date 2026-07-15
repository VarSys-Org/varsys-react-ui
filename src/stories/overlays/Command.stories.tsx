import type { Meta, StoryObj } from "@storybook/react"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "../../components/overlays/command"
import { CalendarIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react"

const meta: Meta<typeof Command> = {
  title: "Overlays/Command",
  component: Command,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SearchIcon className="mr-2 h-4 w-4" />
            <span>Search</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
