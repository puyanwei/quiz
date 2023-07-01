import type { Meta, StoryObj } from "@storybook/react"
import { Text as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography/Text",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Text: Story = {
  render: () => (
    <div>
      <Component>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur perferendis doloribus,
        ipsam sed delectus voluptatum explicabo aperiam beatae aut doloremque. Fugiat nihil nam
        nobis voluptatum eligendi optio quisquam quis?
      </Component>
    </div>
  ),
}
