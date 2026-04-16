import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../inputs'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from './index'

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Dialog>

const DialogDemo = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>Dialog content goes here.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export const Default: Story = { render: () => <DialogDemo /> }
