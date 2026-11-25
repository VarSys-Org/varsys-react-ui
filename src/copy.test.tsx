// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { ContactForm } from "./components/forms/contact-form"
import { CountdownBanner } from "./components/layout/countdown-banner"
import { FeatureSectionStickyScroll } from "./components/layout/feature-section-sticky-scroll"
import { FaqDashed } from "./components/layout/faq-dashed"
import { Default as FaqDashedStory } from "./stories/layout/FaqDashed.stories"
import { Default as FeatureSplitStory } from "./stories/layout/FeatureSplit.stories"
import { Default as SkipLinkStory } from "./stories/navigation/SkipLink.stories"

afterEach(cleanup)

describe("default component and story copy", () => {
  it("shows the contact form confirmation after submit", () => {
    render(<ContactForm />)

    const form = screen.getByRole("button", { name: "Send Message" }).closest("form")
    expect(form).not.toBeNull()
    fireEvent.submit(form!)

    expect(screen.getByText("Thanks for reaching out. We'll get back to you shortly.")).toBeTruthy()
  })

  it("describes the countdown without urgency language", () => {
    render(<CountdownBanner />)

    expect(screen.getByText("It starts today and runs for 24 hours.")).toBeTruthy()
  })

  it("explains the sticky feature section behavior", () => {
    render(<FeatureSectionStickyScroll />)

    expect(screen.getByText("Scroll through the highlights. The content stays pinned as you scroll.")).toBeTruthy()
  })

  it("shows the cleaned feature split story copy", () => {
    render(FeatureSplitStory.render!({}, {} as never))

    expect(screen.getByText("Theme-safe components for any stack. Copy them into your project without extra configuration.")).toBeTruthy()
  })

  it("shows the skip link story instructions", () => {
    render(SkipLinkStory.render!({}, {} as never))

    expect(screen.getByText("Tab to the link or click it to move it into view.")).toBeTruthy()
  })

  it("shows the corrected prorating answer in the FAQ story", () => {
    render(<FaqDashed {...FaqDashedStory.args} />)
    fireEvent.click(screen.getByRole("button", { name: /Can I switch plans at any time/ }))

    expect(screen.getByText("Absolutely. Upgrade or downgrade whenever you like; changes are prorated automatically.")).toBeTruthy()
  })
})
