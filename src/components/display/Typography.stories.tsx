import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './index'

const meta: Meta<typeof Typography> = {
  title: 'Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: { children: 'The quick brown fox jumps over the lazy dog' },
}
export default meta
type Story = StoryObj<typeof Typography>

export const H1: Story = { args: { variant: 'h1' } }
export const H2: Story = { args: { variant: 'h2' } }
export const H3: Story = { args: { variant: 'h3' } }
export const Body1: Story = { args: { variant: 'body1' } }
export const Body2: Story = { args: { variant: 'body2' } }
export const Caption: Story = { args: { variant: 'caption' } }
export const Overline: Story = { args: { variant: 'overline' } }
