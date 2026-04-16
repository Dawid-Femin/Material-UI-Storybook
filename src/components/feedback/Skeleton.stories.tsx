import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './index'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = { args: { variant: 'text', width: 200 } }
export const Circular: Story = { args: { variant: 'circular', width: 40, height: 40 } }
export const Rectangular: Story = { args: { variant: 'rectangular', width: 200, height: 60 } }
export const Rounded: Story = { args: { variant: 'rounded', width: 200, height: 60 } }
export const Wave: Story = {
  args: { animation: 'wave', variant: 'rectangular', width: 200, height: 60 },
}
