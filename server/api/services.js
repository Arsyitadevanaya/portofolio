import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Vue.js',
      description: {
        en: 'I develop dynamic and responsive web interfaces using Vue.js, focusing on component-based architecture, performance, and maintainability.',
        tr: 'I develop dynamic and responsive web interfaces using Vue.js, focusing on component-based architecture, performance, and maintainability.',
      },
      icon: 'logo-vue',
      image: null,
    },
    {
      id: 2,
      title: 'Nuxt.js',
      description: {
        en: 'I build SEO-friendly and high-performance web applications with Nuxt.js, leveraging server-side rendering and static site generation.',
        tr: 'I build SEO-friendly and high-performance web applications with Nuxt.js, leveraging server-side rendering and static site generation.',
      },
      icon: 'logo-nuxt',
      image: '/images/nuxt-service.png',
    },
    {
      id: 3,
      title: 'Laravel',
      description: {
        en: 'I use Laravel to create robust and scalable backend systems, RESTful APIs, and secure authentication for modern web applications.',
        tr: 'I use Laravel to create robust and scalable backend systems, RESTful APIs, and secure authentication for modern web applications.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 4,
      title: 'Flutter',
      description: {
        en: 'I develop cross-platform mobile applications using Flutter, ensuring smooth performance and elegant UI across Android and iOS.',
        tr: 'I develop cross-platform mobile applications using Flutter, ensuring smooth performance and elegant UI across Android and iOS.',
      },
      icon: 'logo-flutter',
      image: '/images/flutter.png',
    },
  ]
})
