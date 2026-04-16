import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './index'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Colors: Story = {
  render: () => (
    <div>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked color="error" />
      <Checkbox defaultChecked color="warning" />
      <Checkbox defaultChecked color="success" />
    </div>
  ),
}
