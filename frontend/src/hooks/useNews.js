import { useState, useCallback } from 'react'
import { newsAPI } from '../services/api'

export const useNews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await newsAPI.getNewsSummaries()
      setNews(response.data)
    } catch (err) {
      setError('Failed to fetch news. Please try again later.')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  return { news, loading, error, fetchNews }
}