import { Style } from "./.nuxt/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@bg-dev/nuxt-naiveui',
        'nuxt-font-loader',
        'nuxt-icon'
    ],
    fontLoader: {
        local: [
          {
            src: '/fonts/FixelText-Regular.woff2',
            family: 'FixelText-Regular',
            class: 'mac-paw-fixel'
          }
        ]
    },
    app: {
        head: {
            htmlAttrs: {
                class: 'dark mac-paw-fixel'
            }
        }
    },
    css: [
        'normalize.css/normalize.css'
    ],
    runtimeConfig: {
        public: {
            FB_API_KEY: process.env.FB_API_KEY,
            FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
            FB_PROJECT_ID: process.env.FB_PROJECT_ID,
            FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
            FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
            FB_APP_ID: process.env.FB_APP_ID,
            FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
        },
      },
})