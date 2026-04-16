import type { Preview, Decorator } from '@storybook/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { themes } from '../src/themes'

const withMuiTheme: Decorator = (Story, context) => {
  const theme = context.globals['theme'] === 'dark' ? themes.dark : themes.light
  return (
    <ThemeProvider theme={theme}>
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
