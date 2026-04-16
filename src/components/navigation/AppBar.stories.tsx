import type { Meta, StoryObj } from '@storybook/react'
import { AppBar, Toolbar } from './index'
import { Typography } from '../display'
import { Button } from '../inputs'

const meta: Meta<typeof AppBar> = {
  title: 'Navigation/AppBar',
  component: AppBar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof AppBar>

export const Default: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          mui-layers
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
}
export const Secondary: Story = {
  render: () => (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          mui-layers
        </Typography>
      </Toolbar>
    </AppBar>
  ),
}
