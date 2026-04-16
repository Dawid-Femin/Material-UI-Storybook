import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './index'

const meta: Meta<typeof Chip> = {
  title: 'Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { label: 'Chip' },
}
export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Clickable: Story = { args: { onClick: () => {} } }
export const Deletable: Story = { args: { onDelete: () => {} } }
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Success" color="success" />
    </div>
  ),
}
