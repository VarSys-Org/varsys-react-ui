import type { Meta, StoryObj } from "@storybook/react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
} from "../../components/overlays/morphing-dialog"

const meta: Meta<typeof MorphingDialog> = {
  title: "Overlays/MorphingDialog",
  component: MorphingDialog,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center p-8">
      <MorphingDialog
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger
          className="w-[180px] max-w-full rounded-2xl bg-zinc-900 px-4 py-2 text-white"
          style={{ borderRadius: "24px" }}
        >
          <MorphingDialogTitle className="text-white">
            Click me
          </MorphingDialogTitle>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            className="pointer-events-auto relative flex w-[400px] max-w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            style={{ borderRadius: "24px" }}
          >
            <MorphingDialogImage
              src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=400"
              alt="A desk"
              className="h-52 w-full object-cover"
            />
            <div className="px-6 py-5">
              <MorphingDialogTitle className="text-2xl font-semibold text-zinc-900">
                A modal dialog
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600">
                With a nice morphing layout animation.
              </MorphingDialogSubtitle>
              <MorphingDialogDescription className="mt-3 text-sm leading-relaxed text-zinc-500">
                This dialog smoothly morphs from the trigger element.
              </MorphingDialogDescription>
              <div className="mt-5 flex items-center justify-end gap-2">
                <MorphingDialogClose className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white" />
              </div>
            </div>
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  ),
}
