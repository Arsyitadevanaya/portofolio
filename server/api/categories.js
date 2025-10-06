import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Application',
        tr: 'Web Application',
      },
    },
    {
      id: 2,
      title: {
        en: 'Mobile Application',
        tr: 'Mobile Application',
      },
    },
  ]
})
