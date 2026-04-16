import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete, TextField } from './index'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    options,
    sx: { width: 300 },
    renderInput: (params) => <TextField {...params} label="Options" />,
  },
}
export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
export const Multiple: Story = { args: { multiple: true } }
export const FreeSolo: Story = { args: { freeSolo: true } }
