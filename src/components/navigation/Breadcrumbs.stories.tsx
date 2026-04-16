import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs, Link } from './index'
import { Typography } from '../display'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" href="#">
        Home
      </Link>
      <Link underline="hover" href="#">
        Category
      </Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
}
