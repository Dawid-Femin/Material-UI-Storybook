import type { Meta, StoryObj } from '@storybook/react'
import { Step, StepLabel, Stepper } from './index'

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: { activeStep: 1 },
}
export default meta
type Story = StoryObj<typeof Stepper>

const steps = ['Select campaign', 'Create ad group', 'Create ad']

export const Default: Story = {
  render: (args) => (
    <Stepper {...args}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
}
export const Vertical: Story = {
  render: (args) => (
    <Stepper orientation="vertical" {...args}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
}
