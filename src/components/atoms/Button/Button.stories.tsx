import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Button",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Button: Story = {
  render: () => (
    <div>
      <Component>Button</Component>
    </div>
  ),
}
