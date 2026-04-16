import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionDetails, AccordionSummary } from './index'
import { Typography } from '../display'

const meta: Meta<typeof Accordion> = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div>
      {['Panel 1', 'Panel 2', 'Panel 3'].map((panel) => (
        <Accordion key={panel}>
          <AccordionSummary>
            <Typography>{panel}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for {panel}.</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  ),
}
