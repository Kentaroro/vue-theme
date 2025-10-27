import presetWebFonts from '@unocss/preset-web-fonts'

export const webFontsPreset = presetWebFonts({
  provider: 'google',
  fonts: {
    sans: 'Noto Sans JP',
    serif: 'Noto Serif JP',
    mono: 'Roboto Mono',
  },
})