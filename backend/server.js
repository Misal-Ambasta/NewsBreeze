import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import newsRoutes from './routes/news.js'
import summaryRoutes from './routes/summary.js'
import voiceRoutes from './routes/voice.js'
import { logger } from './utils/logger.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.use('/api/news', newsRoutes)
app.use('/api/summary', summaryRoutes)
app.use('/api/voice', voiceRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err)
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  logger.info(`NewsBreeze server running on port ${PORT}`)
})