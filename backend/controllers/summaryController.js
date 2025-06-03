import { huggingFaceService } from '../services/huggingFaceService.js'
import { logger } from '../utils/logger.js'

export const summarizeText = async (req, res) => {
  try {
    const { text } = req.body
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' })
    }
    
    const summary = await huggingFaceService.summarizeText(text)
    res.json({ summary })
  } catch (error) {
    logger.error('Error summarizing text:', error)
    res.status(500).json({ error: 'Failed to summarize text' })
  }
}