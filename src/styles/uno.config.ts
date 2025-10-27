import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import { presetAttributify, presetIcons } from 'unocss'
import { theme } from './theme/index'
import { shortcuts } from './shortcuts/index'
import { webFontsPreset } from './presets/webfonts'


export default defineConfig({
  presets: [
    presetWind4(),          // Tailwind4互換
    presetAttributify(),    // 属性モード
    presetIcons(),          // アイコンユーティリティ
    webFontsPreset,       // Webフォント
  ],
  shortcuts,
  theme,
})
