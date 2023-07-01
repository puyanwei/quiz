import type { Meta, StoryObj } from "@storybook/react"
import { Homepage as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Pages/Homepage",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Homepage: Story = {
  render: () => (
    <div>
      <Component />
    </div>
  ),
}
