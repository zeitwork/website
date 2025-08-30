import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  app: {
    head: head()
  },

  routeRules: {
    "/": {
      ssr: true
    },
    "/**": {
      ssr: false
    }
  },

  modules: ["@nuxt/image"],
  vite: { plugins: [tailwindcss()] }
})

function head() {
  return {
    title: "Zeitwork",
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png",
        media: "(prefers-color-scheme: dark)"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-dark.png",
        media: "(prefers-color-scheme: light)"
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Connect your repository, and every commit triggers a new deployment. If your app has a Dockerfile, Zeitwork can run it."
      },

      // OpenGraph
      { property: "og:title", content: "Zeitword" },
      {
        property: "og:description",
        content:
          "Connect your repository, and every commit triggers a new deployment. If your app has a Dockerfile, Zeitwork can run it."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://zeitwork.com" },
      { property: "og:image", content: "https://zeitwork.com/og-image.png" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Zeitwork - The fastest way to deploy and scale any application"
      },
      {
        name: "twitter:description",
        content:
          "Connect your repository, and every commit triggers a new deployment. If your app has a Dockerfile, Zeitwork can run it."
      },
      { name: "twitter:image", content: "https://zeitwork.com/og-image.png" },
      { name: "twitter:site", content: "@zeitwork" }
    ]
  }
}
