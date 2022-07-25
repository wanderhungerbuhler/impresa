import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: '#013397',
    secondary: '#f40000',
    background: '#F1F1F1'
  },
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_600SemiBold',
    bold: 'Poppins_700Bold'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20
  }
})
