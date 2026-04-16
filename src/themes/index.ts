import { createTheme, type Theme } from '@mui/material'

export const lightTheme: Theme = createTheme({
  palette: { mode: 'light' },
})

export const darkTheme: Theme = createTheme({
  palette: { mode: 'dark' },
})

export type BrandTokens = {
  primary: string
  secondary: string
}

export function createBrandTheme(tokens: BrandTokens, mode: 'light' | 'dark' = 'light'): Theme {
  return createTheme({
    palette: {
      mode,
      primary: { main: tokens.primary },
      secondary: { main: tokens.secondary },
    },
  })
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const
