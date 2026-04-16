import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../inputs'
import { List, ListItem, ListItemButton, ListItemText } from '../display'
import { Box } from '../layout'
import { Drawer } from './index'

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Drawer>

const DrawerContent = () => (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)

const DrawerDemo = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerContent />
      </Drawer>
    </>
  )
}

export const Default: Story = { render: () => <DrawerDemo /> }
