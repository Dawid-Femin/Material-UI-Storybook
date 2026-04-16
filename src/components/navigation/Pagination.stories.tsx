import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './index'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: { count: 10 },
}
export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Rounded: Story = { args: { shape: 'rounded' } }
export const Disabled: Story = { args: { disabled: true } }
