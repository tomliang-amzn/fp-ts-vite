/**
 * @type {import('vite').UserConfig}
 */

const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => "index.js"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
    }
  }
})