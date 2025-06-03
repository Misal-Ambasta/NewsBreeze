import { newsService } from '../services/newsService.js'
import { huggingFaceService } from '../services/huggingFaceService.js'
import { logger } from '../utils/logger.js'

export const getNews = async (req, res) => {
  try {
    const news = await newsService.fetchLatestNews()
    res.json(news)
  } catch (error) {
    logger.error('Error fetching news:', error)
    res.status(500).json({ error: 'Failed to fetch news' })
  }
}

export const getNewsSummaries = async (req, res) => {
  try {
    const news = await newsService.fetchLatestNews()
    
    const newsWithSummaries = await Promise.all(
      news.map(async (item) => {
        try {
          const summary = await huggingFaceService.summarizeText(item.content || item.title)
          return { ...item, summary }
        } catch (err) {
          logger.error(`Error summarizing news item ${item.id}:`, err)
          return { ...item, summary: item.content?.substring(0, 200) + '...' || item.title }
        }
      })
    )
    
    res.json(newsWithSummaries)
  } catch (error) {
    logger.error('Error fetching news with summaries:', error)
    res.status(500).json({ error: 'Failed to fetch news summaries' })
  }
}