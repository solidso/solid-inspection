import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        target: 'esnext', // keep top-level await
        outDir: 'dist',
        lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.js'),
            fileName: 'index',
            formats: ['es'] // no cjs support unfortunately because of top-level await
        },
        rollupOptions: {
            external: ['solid-js']
        },
    }
})