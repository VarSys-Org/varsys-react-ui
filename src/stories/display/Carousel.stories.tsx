import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../components/display/carousel"
import { Card, CardContent } from "../../components/display/card"

const meta: Meta<typeof Carousel> = {
  title: "Display/Carousel",
  component: Carousel,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Carousel className="mx-auto w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
