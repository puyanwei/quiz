import type { Meta, StoryObj } from "@storybook/react"
import { Heading as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography/Heading",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Heading: Story = {
  render: () => (
    <div>
      <Component>Heading</Component>
    </div>
  ),
}
