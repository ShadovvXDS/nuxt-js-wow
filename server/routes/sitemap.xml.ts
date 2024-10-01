import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { authors, categories } from '~/pages/blog/constants';

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://nuxtstarter.ai'
  });
  sitemap.write({
    url: "/blog",
    changefreq: 'monthly'
  })
  for (const doc of docs) {
    sitemap.write({
      url: `/blog${doc._path}`,
      changefreq: 'monthly'
    })
  }

  for (const author of authors) {
    sitemap.write({
      url: `/blog/author/${author.slug}`,
      changefreq: 'monthly'
    })
  }

  for (const category of categories) {
    sitemap.write({
      url: `/blog/category/${category.slug}`,
      changefreq: 'monthly'
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})