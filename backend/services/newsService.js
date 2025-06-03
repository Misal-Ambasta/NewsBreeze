import Parser from 'rss-parser'
import { v4 as uuidv4 } from 'uuid'
import { logger } from '../utils/logger.js'

const parser = new Parser()

const RSS_FEEDS = [
  'https://rss.cnn.com/rss/edition.rss',
  'https://feeds.bbci.co.uk/news/rss.xml',
  'https://rss.reuters.com/reuters/topNews',
  'https://feeds.npr.org/1001/rss.xml'
]

export const newsService = {
  async fetchLatestNews() {
    try {
      const allNews = []
      
      for (const feedUrl of RSS_FEEDS) {
        try {
          const feed = await parser.parseURL(feedUrl)
          const feedNews = feed.items.slice(0, 5).map(item => ({
            id: uuidv4(),
            title: item.title,
            content: item.contentSnippet || item.content,
            link: item.link,
            pubDate: item.pubDate,
            source: feed.title || feedUrl
          }))
          allNews.push(...feedNews)
        } catch (err) {
          logger.error(`Error fetching from ${feedUrl}:`, err)
        }
      }
      
      // Sort by date and return latest 20
      return allNews
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
        .slice(0, 20)
        
    } catch (error) {
      logger.error('Error in fetchLatestNews:', error)
      throw error
    }
  }
}