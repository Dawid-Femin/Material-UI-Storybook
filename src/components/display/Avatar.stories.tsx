import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Letter: Story = { args: { children: 'AB' } }
export const Image: Story = { args: { src: 'https://i.pravatar.cc/150', alt: 'User' } }
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
      <Avatar>M</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
    </div>
  ),
}
export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>C</Avatar>
      <Avatar>D</Avatar>
      <Avatar>E</Avatar>
    </AvatarGroup>
  ),
}
