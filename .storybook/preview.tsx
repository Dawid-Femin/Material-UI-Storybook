import type { Preview, Decorator } from '@storybook/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

const lightTheme = createTheme({ palette: { mode: 'light' } })
const darkTheme = createTheme({ palette: { mode: 'dark' } })

const withMuiTheme: Decorator = (Story, context) => {
  const isDark = context.globals['theme'] === 'dark'
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

const preview: Preview = {
  decorators: [withMuiTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'MUI theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /date$/i } },
  },
}

export default preview
