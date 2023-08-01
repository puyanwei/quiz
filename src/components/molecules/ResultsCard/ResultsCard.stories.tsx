import type { Meta, StoryObj } from "@storybook/react"
import { ResultsCard as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Results Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const ResultsCard: Story = {
  render: () => (
    <div className="grid h-screen place-items-center">
      <Component />
    </div>
  ),
}
