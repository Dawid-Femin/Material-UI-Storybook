import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Button' },
}
export default meta
type Story = StoryObj<typeof Button>

export const Contained: Story = { args: { variant: 'contained' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Text: Story = { args: { variant: 'text' } }
export const Disabled: Story = { args: { variant: 'contained', disabled: true } }
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  ),
}
