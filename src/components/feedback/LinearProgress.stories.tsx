import type { Meta, StoryObj } from '@storybook/react'
import { LinearProgress } from './index'

const meta: Meta<typeof LinearProgress> = {
  title: 'Feedback/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof LinearProgress>

export const Indeterminate: Story = {}
export const Determinate: Story = { args: { variant: 'determinate', value: 60 } }
export const Buffer: Story = { args: { variant: 'buffer', value: 60, valueBuffer: 80 } }
