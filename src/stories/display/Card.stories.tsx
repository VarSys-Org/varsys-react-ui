import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "../../components/display/card"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Card> = {
  title: "Display/Card",
  component: Card,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="max-w-sm overflow-hidden">
      <img
        alt="Mountains"
        className="aspect-video w-full object-cover"
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>Explore the beauty of nature</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has an image at the top. The image flows seamlessly into the card body.</p>
      </CardContent>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Configure how you receive notifications.</p>
      </CardContent>
    </Card>
  ),
}
