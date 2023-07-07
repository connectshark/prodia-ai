import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: 'main.js',
      name: 'ProdiaJS',
      fileName: 'prodiajs'
    }
  }
})