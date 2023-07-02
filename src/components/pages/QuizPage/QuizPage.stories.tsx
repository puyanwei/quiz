import type { Meta, StoryObj } from "@storybook/react"
import { QuizPage as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Pages/Quiz Page",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const QuizPage: Story = {
  render: () => (
    <div>
      <Component />
    </div>
  ),
}
