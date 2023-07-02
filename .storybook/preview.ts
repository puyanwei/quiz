import "../src/styles/globals.css"
import type { Preview } from "@storybook/react"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Atoms", "Molecules", "Pages"],
        locales: "en-US",
      },
    },
  },
}

export default preview
