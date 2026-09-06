import type { Meta, StoryObj } from "@storybook/react"
import { ContactForm } from "../../components/forms/contact-form"

const meta: Meta<typeof ContactForm> = {
  title: "Forms/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="bg-background p-10">
      <ContactForm />
    </div>
  ),
}

export const CustomLabels: Story = {
  render: () => (
    <div className="bg-background p-10">
      <ContactForm
        submitLabel="Get in touch"
        successTitle="Thanks!"
        successMessage="We've received your message and will reply within 24 hours."
      />
    </div>
  ),
}

export const ControlledSubmit: Story = {
  render: () => (
    <div className="bg-background p-10">
      <ContactForm
        onSubmitted={(values) => {
          console.log("Submitted:", values)
        }}
      />
    </div>
  ),
}