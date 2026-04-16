# mui-layers

A professional MUI component library with multi-theme support (light, dark, brand variants), built with React 19, TypeScript, and Storybook.

[![CI](https://github.com/Dawid-Femin/Material-UI-Storybook/actions/workflows/ci.yml/badge.svg)](https://github.com/Dawid-Femin/Material-UI-Storybook/actions/workflows/ci.yml)

## Installation

```bash
npm install mui-layers @mui/material @emotion/react @emotion/styled
```

## Usage

```tsx
import { ThemeProvider } from '@mui/material'
import { Button, themes } from 'mui-layers'

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  )
}
```

## Themes

```tsx
import { themes, createBrandTheme } from 'mui-layers'

// Built-in themes
themes.light
themes.dark

// Custom brand theme
const brandTheme = createBrandTheme({
  primary: '#6200ea',
  secondary: '#03dac6',
})
```

## Components

All MUI components are re-exported with full TypeScript support:

- **Inputs** — Button, TextField, Select, Checkbox, Radio, Switch, Slider, Autocomplete, Rating, ...
- **Display** — Typography, Avatar, Badge, Chip, Divider, List, Table, Tooltip, ...
- **Feedback** — Alert, CircularProgress, LinearProgress, Dialog, Snackbar, Skeleton, ...
- **Layout** — Box, Container, Grid, Stack, Paper, Card, Accordion, ...
- **Navigation** — AppBar, Drawer, Tabs, Breadcrumbs, Pagination, Stepper, ...

## Development

```bash
pnpm install
pnpm storybook       # start Storybook dev server
pnpm build           # build library
pnpm lint            # run ESLint
pnpm publint         # validate package exports
```

## Releasing

```bash
pnpm changeset       # create a changeset
pnpm version         # bump versions
pnpm release         # build + publish to npm
```

## License

MIT
