import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
})

export const newsAPI = {
  getNews: () => api.get('/news'),
  getNewsSummaries: () => api.get('/news/summaries'),
}

export const summaryAPI = {
  summarizeText: (text) => api.post('/summary', { text }),
}

export const voiceAPI = {
  generateVoice: (data) => api.post('/voice/generate', data),
}

export default api