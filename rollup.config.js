import path from "node:path";
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
    {
        input: path.resolve(import.meta.dirname, 'src/index.ts'),
        external: [/solid-js/],
        output: [
            {
                format: 'es',
                file: 'dist/index.js',
                sourcemap: true
            },
            {
                format: 'cjs',
                file: 'dist/index.cjs.js',
                sourcemap: true
            }
        ],
        plugins: [
            typescript(),
            commonjs({ sourceMap: true, extensions: ['.js', '.ts'] }),
            babel({
                extensions: ['.ts'],
                include: ['src/**/*.ts'],
                babelHelpers: 'bundled',
                babelrc: false,
                presets: ['@babel/preset-typescript'],
                plugins: []
            }),
        ]
    },
]