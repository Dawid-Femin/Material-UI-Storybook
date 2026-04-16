import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tab, Tabs } from './index'
import { Box } from '../layout'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Tabs>

const TabsDemo = () => {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    </Box>
  )
}

const ScrollableTabsDemo = () => {
  const [value, setValue] = useState(0)
  return (
    <Tabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
      {Array.from({ length: 8 }, (_, i) => (
        <Tab key={i} label={`Tab ${i + 1}`} />
      ))}
    </Tabs>
  )
}

export const Default: Story = { render: () => <TabsDemo /> }
export const Scrollable: Story = { render: () => <ScrollableTabsDemo /> }
