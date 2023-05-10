// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@element-plus/nuxt',
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
    css: ["element-plus/theme-chalk/dark/css-vars.css"]
})
