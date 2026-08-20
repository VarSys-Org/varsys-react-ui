import type { Meta, StoryObj } from "@storybook/react"
import {
  Rocket,
  Box,
  Lock,
  Globe,
  Settings,
  Zap,
  Star,
  Wand2,
} from "lucide-react"
import type { ArcTimelineItem } from "../../components/data-viz/arc-timeline"
import { ArcTimeline } from "../../components/data-viz/arc-timeline"

const meta: Meta<typeof ArcTimeline> = {
  title: "DataViz/ArcTimeline",
  component: ArcTimeline,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const timeline: ArcTimelineItem[] = [
  {
    time: "2022",
    steps: [
      {
        icon: <Rocket className="size-5" />,
        content: "Founded Visionary Tech, a cutting-edge AI development company.",
      },
      {
        icon: <Box className="size-5" />,
        content: "Launched first AI-powered mobile app for personalized recommendations.",
      },
    ],
  },
  {
    time: "2023",
    steps: [
      {
        icon: <Lock className="size-5" />,
        content: "Raised $3M seed round at a $20M valuation.",
      },
      {
        icon: <Globe className="size-5" />,
        content: "Expanded to global markets with localized app versions in 5 countries.",
      },
      {
        icon: <Settings className="size-5" />,
        content: "Implemented enhanced machine learning algorithms for data prediction.",
      },
    ],
  },
  {
    time: "2024",
    steps: [
      {
        icon: <Zap className="size-5" />,
        content: "Introduced AI-powered virtual assistant for customer service.",
      },
      {
        icon: <Star className="size-5" />,
        content: "Partnered with several tech giants to enhance app capabilities.",
      },
      {
        icon: <Wand2 className="size-5" />,
        content: "Launched AR-based features for more immersive user experiences.",
      },
    ],
  },
  {
    time: "2025",
    steps: [
      {
        icon: <Star className="size-5" />,
        content: "Rolled out AI-driven marketplace for personalized product discovery.",
      },
      {
        icon: <Rocket className="size-5" />,
        content: "Showcased at CES with revolutionary AI-powered consumer products.",
      },
    ],
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ArcTimeline
        data={timeline}
        defaultActiveStep={{ time: "2022", stepIndex: 0 }}
        arcConfig={{
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.4,
          lineCountFillBetweenSteps: 8,
          boundaryPlaceholderLinesCount: 50,
        }}
      />
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="p-8">
      <ArcTimeline
        data={timeline}
        arcConfig={{
          circleWidth: 3500,
          angleBetweenMinorSteps: 0.5,
          lineCountFillBetweenSteps: 5,
          boundaryPlaceholderLinesCount: 30,
        }}
      />
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="p-8">
      <ArcTimeline
        className="[--step-line-active-color:#9780ff] [--step-line-inactive-color:#737373] [--placeholder-line-color:#737373] [--icon-active-color:#d4d4d4] [--icon-inactive-color:#a3a3a3] [--time-active-color:#d4d4d4] [--time-inactive-color:#a3a3a3] [--description-color:#d4d4d4]"
        data={timeline}
        defaultActiveStep={{ time: "2023", stepIndex: 1 }}
        arcConfig={{
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.4,
          lineCountFillBetweenSteps: 8,
          boundaryPlaceholderLinesCount: 50,
        }}
      />
    </div>
  ),
}