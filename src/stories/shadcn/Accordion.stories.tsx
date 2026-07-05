import type { Meta, StoryObj } from "@storybook/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

const meta: Meta<typeof Accordion> = {
  title: "shadcn/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It is animated by default with Tailwind CSS.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
