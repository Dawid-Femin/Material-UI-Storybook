import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from './index'
import { Paper } from '../layout'

const meta: Meta<typeof Table> = {
  title: 'Display/Table',
  component: Table,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Table>

const rows = [
  { name: 'Alice', age: 30, role: 'Engineer' },
  { name: 'Bob', age: 25, role: 'Designer' },
  { name: 'Carol', age: 35, role: 'Manager' },
]

export const Default: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}
