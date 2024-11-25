import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // File matching configuration
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'], // Files to lint
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Ignored paths
  },

  // Core ESLint configurations
  js.configs.recommended, // Recommended JavaScript rules

  // Vue-specific rules
  {
    ...pluginVue.configs['flat/essential'], // Essential Vue rules
  },

  // Prettier rules to disable formatting-related conflicts
  {
    ...skipFormatting,
  },
]
