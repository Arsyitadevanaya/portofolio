import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Cashierly',
      category: {
        id: 1,
        title: {
          en: 'Web Application',
          tr: 'Web Application',
        },
      },
      date: '11 Juli, 2025',
      content: {
        en: 'Cashierly is a modern web-based cashier application built with Laravel, Vue.js, Inertia.js, TypeScript, and PWA. It provides a responsive and reliable solution for managing sales, inventory, and transactions efficiently in real time.',
        tr: 'Cashierly is a modern web-based cashier application built with Laravel, Vue.js, Inertia.js, TypeScript, and PWA. It provides a responsive and reliable solution for managing sales, inventory, and transactions efficiently in real time.',
      },
      image: '/images/cashierly.png',
    },
    {
      id: 2,
      title: 'Adampartner',
      category: {
        id: 1,
        title: {
          en: 'Web Application',
          tr: 'Web Application',
        },
      },
      date: '20 November, 2024',
      content: {
        en: 'Adampartner is a clinic management web application developed using Vue.js, TypeScript, and REST API integration. It enables clinics to manage patients, schedules, and services efficiently with a clean and user-friendly interface.',
        tr: 'Adampartner is a clinic management web application developed using Vue.js, TypeScript, and REST API integration. It enables clinics to manage patients, schedules, and services efficiently with a clean and user-friendly interface.',
      },
      image: '/images/adampartner.png',
    },
    {
      id: 3,
      title: 'Adameds',
      category: {
        id: 1,
        title: {
          en: 'Web Application',
          tr: 'Web Application',
        },
      },
      date: '05 August, 2024',
      content: {
        en: 'Adameds is a hospital management web platform built with Vue.js, TypeScript, and REST API. It focuses on scalability and ease of use, supporting modules for patient records, medical services, and billing management.',
        tr: 'Adameds is a hospital management web platform built with Vue.js, TypeScript, and REST API. It focuses on scalability and ease of use, supporting modules for patient records, medical services, and billing management.',
      },
      image: '/images/adameds.png',
    },
    {
      id: 4,
      title: 'Budgetin',
      category: {
        id: 2,
        title: {
          en: 'Mobile Application',
          tr: 'Mobile Application',
        },
      },
      date: '20 April, 2024',
      content: {
        en: 'Budgetin is a mobile financial tracker app built with Flutter. It helps users manage their income, expenses, and savings through an intuitive interface and insightful analytics features.',
        tr: 'Budgetin is a mobile financial tracker app built with Flutter. It helps users manage their income, expenses, and savings through an intuitive interface and insightful analytics features.',
      },
      image: '/images/budgetin.png',
    },
    {
      id: 5,
      title: 'E-TOEFL',
      category: {
        id: 2,
        title: {
          en: 'Mobile Application',
          tr: 'Mobile Application',
        },
      },
      date: '11 Januari, 2024',
      content: {
        en: 'E-TOEFL is a mobile application developed using Flutter, designed to help users prepare for TOEFL exams. It offers practice questions, progress tracking, and simulated tests with a clean and responsive UI.',
        tr: 'E-TOEFL is a mobile application developed using Flutter, designed to help users prepare for TOEFL exams. It offers practice questions, progress tracking, and simulated tests with a clean and responsive UI.',
      },
      image: '/images/e-toefl.png',
    },
  ]
})
