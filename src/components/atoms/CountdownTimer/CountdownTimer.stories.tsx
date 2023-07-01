import type { Meta, StoryObj } from "@storybook/react"
import { CountdownTimer as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Countdown Timer",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const CountdownTimer: Story = {
  render: () => (
    <div>
      <Component duration={60} onTimerEnd={() => alert("Timer has ended!")} />
    </div>
  ),
}
