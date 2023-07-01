import type { Meta, StoryObj } from "@storybook/react"
import { Card as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Card",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Card: Story = {
  render: () => (
    <div className="p-4">
      <Component>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus perferendis nostrum,
        cumque illum amet similique, eaque sequi nesciunt nulla officia vitae labore consequuntur,
        ut illo nemo dicta inventore nihil dolor?
      </Component>
    </div>
  ),
}
