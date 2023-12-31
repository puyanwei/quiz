import type { Meta, StoryObj } from "@storybook/react"
import { EndGameCard as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/End Game Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const EndGameCard: Story = {
  render: () => (
    <div className="grid h-screen place-items-center">
      <Component isTimeUp={false} score={4} totalQuestions={6} />
    </div>
  ),
}
