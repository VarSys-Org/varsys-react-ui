import type { Meta, StoryObj } from "@storybook/react"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "../../components/forms/questionnaire"

const meta: Meta<typeof Questionnaire> = {
  title: "Forms/Questionnaire",
  component: Questionnaire,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <Questionnaire>
        <QuestionnaireProgress />
        <QuestionnaireItem
          name="goal"
          multiple
          required
          defaultValue="increase-revenue"
        >
          <QuestionnaireTitle>What is your goal?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Select all that apply.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="increase-revenue">
              Increase revenue
              <QuestionnaireChoiceDescription>
                Grow monthly recurring revenue
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="reduce-costs">
              Reduce costs
              <QuestionnaireChoiceDescription>
                Lower operating expenses
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="improve-retention">
              Improve retention
              <QuestionnaireChoiceDescription>
                Keep customers longer
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="budget" required defaultValue="<10">
          <QuestionnaireTitle>What is your budget?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="<10">Under $10k</QuestionnaireChoice>
            <QuestionnaireChoice value="10-50">$10k – $50k</QuestionnaireChoice>
            <QuestionnaireChoice value=">50">Over $50k</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="email" required>
          <QuestionnaireTitle>Where should we send results?</QuestionnaireTitle>
          <QuestionnaireDescription>
            We will only use this to share your report.
          </QuestionnaireDescription>
          <QuestionnaireInput
            type="email"
            placeholder="you@example.com"
            defaultValue=""
          />
          <QuestionnaireError>Please provide a valid email.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  ),
}

export const SingleChoice: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <Questionnaire>
        <QuestionnaireProgress />
        <QuestionnaireItem name="team-size" required defaultValue="1">
          <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="1">Just me</QuestionnaireChoice>
            <QuestionnaireChoice value="2-10">2 – 10 people</QuestionnaireChoice>
            <QuestionnaireChoice value="11-50">11 – 50 people</QuestionnaireChoice>
            <QuestionnaireChoice value=">50">50+ people</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  ),
}

export const CustomLabels: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <Questionnaire>
        <QuestionnaireItem name="plan" required defaultValue="starter">
          <QuestionnaireTitle>Choose your plan</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
            <QuestionnaireChoice value="pro">Pro</QuestionnaireChoice>
            <QuestionnaireChoice value="enterprise">Enterprise</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious>Back</QuestionnairePrevious>
          <QuestionnaireSkip>Not now</QuestionnaireSkip>
          <QuestionnaireNext>Continue</QuestionnaireNext>
          <QuestionnaireSubmit>Finish</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  ),
}
