import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../inputs'
import { Tooltip } from './index'

const meta: Meta<typeof Tooltip> = {
  title: 'Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: { title: 'Tooltip text', children: <Button variant="outlined">Hover me</Button> },
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
export const Top: Story = { args: { placement: 'top' } }
export const Bottom: Story = { args: { placement: 'bottom' } }
export const Arrow: Story = { args: { arrow: true } }
