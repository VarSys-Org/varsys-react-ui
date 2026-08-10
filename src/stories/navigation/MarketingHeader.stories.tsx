import type { Meta, StoryObj } from "@storybook/react"
import { MarketingHeader } from "../../components/navigation/marketing-header"

const meta: Meta<typeof MarketingHeader> = {
  title: "Navigation/MarketingHeader",
  component: MarketingHeader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const navigation = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "History", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
]

export const Default: Story = {
  args: {
    brand: "Brand",
    navigation,
    ctaLabel: "Login",
    secondaryCtaLabel: "Register",
  },
}

export const Centered: Story = {
  args: {
    brand: "Brand",
    navigation: navigation.slice(0, 4),
    ctaLabel: "Get Started",
  },
}

export const StackedCtas: Story = {
  args: {
    brand: "Acme",
    navigation: navigation.slice(0, 3),
    ctaLabel: "Sign up",
    secondaryCtaLabel: "Sign in",
    stackedCtas: true,
  },
}

export const NoCtas: Story = {
  args: {
    brand: "Minimal",
    navigation,
  },
}
