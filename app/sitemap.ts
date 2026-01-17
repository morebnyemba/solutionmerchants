import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.solutionsmerchants.co.zw';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const servicePages = [
    {
      url: `${baseUrl}/services/wholesale-retail`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/hardware-wholesale`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/commodity-broking`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/transport-logistics`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/supply-chain-management`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/tendering-bulk-wholesaling`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/real-estate-property`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/money-capital-markets`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/general-dealership`,
      lastModified: new Date('2026-01-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...servicePages];
}
