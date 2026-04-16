import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './index'

const meta: Meta<typeof Badge> = {
  title: 'Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    badgeContent: 4,
    color: 'primary',
    children: <div style={{ width: 40, height: 40, background: '#ccc' }} />,
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const Dot: Story = { args: { variant: 'dot' } }
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <Badge badgeContent={4} color="primary">
        <div style={{ width: 40, height: 40, background: '#ccc' }} />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <div style={{ width: 40, height: 40, background: '#ccc' }} />
      </Badge>
      <Badge badgeContent={4} color="error">
        <div style={{ width: 40, height: 40, background: '#ccc' }} />
      </Badge>
    </div>
  ),
}
