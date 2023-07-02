import type { Meta, StoryObj } from "@storybook/react"
import { QuestionCard as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Question Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

const mockQuestion = {
  question: "What's the capital of the UK",
  answers: [
    {
      phrasing: "London",
      isCorrect: true,
    },
    {
      phrasing: "Paris",
      isCorrect: false,
    },
    {
      phrasing: "Berlin",
      isCorrect: false,
    },
    {
      phrasing: "Madrid",
      isCorrect: false,
    },
  ],
}

export const QuestionCard: Story = {
  render: () => (
    <div className="grid h-screen place-items-center">
      <Component
        data={mockQuestion}
        currentQuestion={2}
        handleClick={() => alert("Answer chosen")}
      />
    </div>
  ),
}
