import type { Meta, StoryObj } from '@storybook/react'
import { CircularProgress } from './index'

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof CircularProgress>

export const Indeterminate: Story = {}
export const Determinate: Story = { args: { variant: 'determinate', value: 60 } }
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="error" />
    </div>
  ),
}
