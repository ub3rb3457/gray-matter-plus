module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "features": {
    "interactionsDebugger": true,
  },
  "core": {
    "builder": "storybook-builder-vite"
  },
  /**
   * Extend Vite config
   * @param {import('vite').UserConfig} config
   * @param {'DEVELOPMENT'|'PRODUCTION'} [configType]
   * @returns {Promise<*>}
   */
  async viteFinal(config, { configType }) {
    // Needed only for development mode: `npm run storybook`
    config.optimizeDeps = configType === 'PRODUCTION' ? config.optimizeDeps : {
      ...(config.optimizeDeps || {}),
      include: [
        ...(config?.optimizeDeps?.include || []),
        // Fix: `@storybook/addon-interactions` exports is not defined or `jest-mock` does not provide an export named 'fn'
        'jest-mock'
      ],
    }
    // ...
    return config;
  }

}
