import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Paper } from './index'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Stack>

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper sx={{ p: 2, textAlign: 'center' }}>{children}</Paper>
)

export const Row: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
}
export const Column: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
}
