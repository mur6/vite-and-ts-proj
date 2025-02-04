// use library mode
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
        entry: 'src/main.ts',
        name: 'MyLib',
        fileName: (format) => `my-lib.${format}.js`
        },
    },
})
