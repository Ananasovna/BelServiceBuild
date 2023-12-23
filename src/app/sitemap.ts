import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 1,
      url: 'https://www.belsb.ru',
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.8,
      url: 'https://www.belsb.ru/about',
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.6,
      url: 'https://www.belsb.ru/contacts',
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://www.belsb.ru/renovation',
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.5,
      url: 'https://www.belsb.ru/maintenance',
    },
  ]
}
