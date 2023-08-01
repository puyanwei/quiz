import type { Meta, StoryObj } from "@storybook/react"
import { ResultsCard as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Results Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

const mockAnswers = [
  "Dushanbe",
  "Male",
  "Maputo",
  "Vilnius",
  "Vientiane",
  "Ouagadougou",
  "Apia",
  "Tirana",
  "Dili",
  "Zagreb",
]
export const ResultsCard: Story = {
  render: () => (
    <div className="grid h-screen place-items-center">
      <div className="flex gap-8">
        <Component answers={mockAnswers} />
        <Component answers={[]} />
      </div>
    </div>
  ),
}
