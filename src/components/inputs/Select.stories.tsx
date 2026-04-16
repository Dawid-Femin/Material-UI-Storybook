import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from '../navigation'
import { FormControl, InputLabel, Select } from './index'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Age</InputLabel>
        <Story />
      </FormControl>
    ),
  ],
  args: { label: 'Age' },
}
export default meta
type Story = StoryObj<typeof Select>

const options = (
  <>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </>
)

export const Default: Story = { args: { children: options } }
export const Filled: Story = { args: { variant: 'filled', children: options } }
export const Standard: Story = { args: { variant: 'standard', children: options } }
export const Disabled: Story = { args: { disabled: true, children: options } }
