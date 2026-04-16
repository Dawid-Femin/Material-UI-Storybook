import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './index'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: { children: 'This is an alert message.' },
}
export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = { args: { severity: 'info' } }
export const Success: Story = { args: { severity: 'success' } }
export const Warning: Story = { args: { severity: 'warning' } }
export const Error: Story = { args: { severity: 'error' } }
export const Outlined: Story = { args: { severity: 'info', variant: 'outlined' } }
export const Filled: Story = { args: { severity: 'info', variant: 'filled' } }
