import type { Meta, StoryObj } from '@storybook/react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from './index'

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: { defaultValue: 'a' },
}
export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <FormControl>
      <FormLabel>Options</FormLabel>
      <RadioGroup {...args}>
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
        <FormControlLabel value="c" control={<Radio />} label="Option C" />
      </RadioGroup>
    </FormControl>
  ),
}
export const Row: Story = {
  render: (args) => (
    <FormControl>
      <FormLabel>Options</FormLabel>
      <RadioGroup row {...args}>
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
      </RadioGroup>
    </FormControl>
  ),
}
