# mui-layers

A professional MUI component library with multi-theme support (light, dark, brand variants), built with React 19, TypeScript, and Storybook.

## Installation

```bash
npm install mui-layers @mui/material @emotion/react @emotion/styled
```

## Usage

```tsx
import { ThemeProvider } from '@mui/material'
import { Button, theme, darkTheme } from 'mui-layers'

<ThemeProvider theme={theme}>
  <Button variant="contained">Hello</Button>
</ThemeProvider>
```

## Themes

```tsx
import { themes } from 'mui-layers'

// themes.light | themes.dark | themes.brand
```

## License

MIT
