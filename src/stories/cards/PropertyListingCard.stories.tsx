import type { Meta, StoryObj } from "@storybook/react"
import { PropertyListingCard } from "../../components/cards/property-listing-card"

const meta: Meta<typeof PropertyListingCard> = {
  title: "Cards/PropertyListingCard",
  component: PropertyListingCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md">
        <PropertyListingCard />
      </div>
    </div>
  ),
}

export const CustomAmenities: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md">
        <PropertyListingCard
          price="$520,000"
          address="14 Willow Lane, Lakeside"
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1160"
          amenities={[
            { label: "Parking", value: "1 space" },
            { label: "Bathroom", value: "3 rooms" },
            { label: "Bedroom", value: "5 rooms" },
          ]}
        />
      </div>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="grid w-full max-w-2xl grid-cols-2 gap-6">
        <PropertyListingCard price="$310,000" address="9 Acacia Close" />
        <PropertyListingCard price="$675,000" address="31 Marina Drive" />
      </div>
    </div>
  ),
}