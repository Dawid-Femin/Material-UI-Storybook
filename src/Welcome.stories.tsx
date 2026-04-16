import type { Meta, StoryObj } from '@storybook/react'

const Placeholder = () => <div>mui-layers 🚀</div>

const meta: Meta<typeof Placeholder> = {
  title: 'Welcome',
  component: Placeholder,
}

export default meta
type Story = StoryObj<typeof Placeholder>

export const Default: Story = {}
