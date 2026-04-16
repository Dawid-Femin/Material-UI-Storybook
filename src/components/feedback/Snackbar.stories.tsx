import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../inputs'
import { Alert, Snackbar } from './index'

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Snackbar>

const SnackbarDemo = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Snackbar message"
      />
    </>
  )
}

const SnackbarAlertDemo = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Alert Snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity="success" onClose={() => setOpen(false)}>
          Operation successful!
        </Alert>
      </Snackbar>
    </>
  )
}

export const Default: Story = { render: () => <SnackbarDemo /> }
export const WithAlert: Story = { render: () => <SnackbarAlertDemo /> }
