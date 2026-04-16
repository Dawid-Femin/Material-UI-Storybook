import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './index'

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { label: 'Label' },
}
export default meta
type Story = StoryObj<typeof TextField>

export const Outlined: Story = { args: { variant: 'outlined' } }
export const Filled: Story = { args: { variant: 'filled' } }
export const Standard: Story = { args: { variant: 'standard' } }
export const WithHelperText: Story = { args: { helperText: 'Helper text', variant: 'outlined' } }
export const Error: Story = {
  args: { error: true, helperText: 'Error message', variant: 'outlined' },
}
export const Disabled: Story = { args: { disabled: true, variant: 'outlined' } }
export const Multiline: Story = { args: { multiline: true, rows: 4, variant: 'outlined' } }
