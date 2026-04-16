import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './index'

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Colors: Story = {
  render: () => (
    <div>
      <Switch defaultChecked color="primary" />
      <Switch defaultChecked color="secondary" />
      <Switch defaultChecked color="error" />
      <Switch defaultChecked color="warning" />
      <Switch defaultChecked color="success" />
    </div>
  ),
}
