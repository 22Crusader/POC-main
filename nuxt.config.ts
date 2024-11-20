import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: './src',
    ssr: true,
    builder: 'vite',
    vite: {
        build: {
            minify: process.env.NODE_ENV !== 'production' ? false : 'terser'
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'POC',
            meta: [{
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }],
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in',
        },
    },
    css: [ '~/assets/scss/main.scss' ],
    typescript: {
        strict: true,
        shim: false,
    },
    future: {
        typescriptBundlerResolution: true,
    },
    components: [
        { path: '@/components/', pathPrefix: true },
    ],
    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
    ],
    compatibilityDate: '2024-04-03',
})