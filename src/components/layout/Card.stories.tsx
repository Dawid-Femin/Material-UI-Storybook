import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../inputs'
import { Card, CardActions, CardContent, CardHeader, CardMedia } from './index'
import { Typography } from '../display'

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 345 }}>
        <Story />
      </div>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader title="Card Title" subheader="Subheader" />
      <CardContent>
        <Typography variant="body2">Card content goes here.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action 1</Button>
        <Button size="small">Action 2</Button>
      </CardActions>
    </Card>
  ),
}
export const WithMedia: Story = {
  render: () => (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/345/140"
        alt="placeholder"
      />
      <CardContent>
        <Typography variant="body2">Card with image.</Typography>
      </CardContent>
    </Card>
  ),
}
export const Outlined: Story = {
  render: () => (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2">Outlined card.</Typography>
      </CardContent>
    </Card>
  ),
}
