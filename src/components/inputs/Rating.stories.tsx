import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './index'

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
  args: { defaultValue: 3 },
}
export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {}
export const ReadOnly: Story = { args: { readOnly: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Precision: Story = { args: { precision: 0.5 } }
