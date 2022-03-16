/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

declare module '@vue/theme/config' {
  import { UserConfig } from 'vitepress'
  const config: () => UserConfig
  export default config
}

declare module '@vue/theme/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>
  export default createHighlighter
}
