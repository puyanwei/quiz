import type { Meta, StoryObj } from "@storybook/react"
import { ResultsCard as Component } from "."
import { data } from "@/data/questions"

const meta: Meta<typeof Component> = {
  title: "Molecules/Results Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

const mockAnswers = ["Dushanbe", "Male"]

const mockQuestions = [
  {
    question: "What is the capital city of Mongolia?",
    answers: [
      {
        phrasing: "Astana",
        isCorrect: false,
      },
      {
        phrasing: "Tashkent",
        isCorrect: false,
      },
      {
        phrasing: "Ulaanbaatar",
        isCorrect: true,
      },
      {
        phrasing: "Dushanbe",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which city serves as the capital of Sri Lanka?",
    answers: [
      {
        phrasing: "Colombo",
        isCorrect: true,
      },
      {
        phrasing: "Dhaka",
        isCorrect: false,
      },
      {
        phrasing: "Kathmandu",
        isCorrect: false,
      },
      {
        phrasing: "Male",
        isCorrect: false,
      },
    ],
  },
]
export const ResultsCard: Story = {
  render: () => (
    <div className="grid h-screen place-items-center">
      <div className="flex gap-8">
        <Component answers={mockAnswers} data={mockQuestions} />
        <Component answers={[]} data={mockQuestions} />
      </div>
    </div>
  ),
}
