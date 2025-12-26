// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  $production: {
    app: {
      baseURL: process.env.BASE_URL || '/'
    }
  },

  modules: ['@nuxt/eslint', '@pinia/nuxt'],

  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    plugins: [vuetify({ autoImport: true })],

    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  app: {
    head: {
      titleTemplate: '%s - x-math',
      title: 'x-math',
      htmlAttrs: {
        lang: 'it'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  }
})