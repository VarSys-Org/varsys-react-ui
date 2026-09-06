import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  ToastStack,
  type ToastStackItem,
} from "../../components/overlays/toast-stack"

const meta: Meta<typeof ToastStack> = {
  title: "Overlays/ToastStack",
  component: ToastStack,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const initialToasts: ToastStackItem[] = [
  {
    id: "1",
    title: "Success",
    message: "Your changes have been saved.",
    variant: "success",
  },
  {
    id: "2",
    title: "Error",
    message: "There was a problem submitting the form.",
    variant: "error",
  },
  {
    id: "3",
    title: "Warning",
    message: "Your session is about to expire.",
    variant: "warning",
  },
]

const ToastStory = ({ autoDismiss = true }: { autoDismiss?: boolean }) => {
  const [toasts, setToasts] = useState<ToastStackItem[]>(initialToasts)

  return (
    <div className="relative min-h-64 bg-background">
      <ToastStack
        toasts={toasts}
        autoDismiss={autoDismiss}
        onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
      />
      <button
        type="button"
        onClick={() =>
          setToasts((prev) => [
            ...prev,
            {
              id: String(Date.now()),
              title: "Info",
              message: "A new notification just arrived.",
              variant: "info",
            },
          ])
        }
        className="absolute bottom-4 left-4 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700"
      >
        Add toast
      </button>
    </div>
  )
}

export const AllVariants: Story = {
  render: () => <ToastStory />,
}

export const NoAutoDismiss: Story = {
  render: () => <ToastStory autoDismiss={false} />,
}

export const BottomRight: Story = {
  render: () => {
    const [toasts, setToasts] = useState<ToastStackItem[]>(initialToasts)
    return (
      <div className="relative min-h-64 bg-background">
        <ToastStack
          toasts={toasts}
          position="bottom-right"
          onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
        />
      </div>
    )
  },
}