import type { Meta, StoryObj } from "@storybook/react"
import { CookieConsent } from "../../components/overlays/cookie-consent"

const meta: Meta<typeof CookieConsent> = {
  title: "Overlays/CookieConsent",
  component: CookieConsent,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const BottomCenter: Story = {
  args: {
    open: true,
    position: "bottom-center",
    title: "Cookie Settings",
    description:
      "We use cookies to improve your experience and for marketing. Visit our Cookies Policy to learn more.",
    acceptLabel: "Agree",
    rejectLabel: "Reject",
    policyHref: "#",
  },
}

export const FullWidth: Story = {
  args: {
    open: true,
    position: "bottom",
    title: "Cookie Settings",
    description:
      "We use cookies to improve your experience and for marketing.",
    acceptLabel: "Agree",
    rejectLabel: "Reject",
  },
}

export const WithoutTitle: Story = {
  args: {
    open: true,
    description:
      "By continuing to use this site you consent to the use of cookies in accordance with our Cookies Policy.",
    policyHref: "#",
    acceptLabel: "Accept",
    rejectLabel: "Decline",
  },
}
