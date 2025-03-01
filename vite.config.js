import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.js'),
            fileName: 'index',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['solid-js']
        },
    }
})