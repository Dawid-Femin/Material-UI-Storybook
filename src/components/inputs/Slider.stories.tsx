import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './index'

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '0 16px' }}>
        <Story />
      </div>
    ),
  ],
  args: { defaultValue: 30 },
}
export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
export const Range: Story = { args: { defaultValue: [20, 60] } }
export const WithMarks: Story = { args: { marks: true, step: 10 } }
export const WithLabel: Story = { args: { valueLabelDisplay: 'auto' } }
