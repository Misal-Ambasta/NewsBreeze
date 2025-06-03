import { voiceService } from '../services/voiceService.js'
import { logger } from '../utils/logger.js'

export const generateVoice = async (req, res) => {
  try {
    const { text, voiceId } = req.body
    
    if (!text || !voiceId) {
      return res.status(400).json({ error: 'Text and voiceId are required' })
    }
    
    const audioUrl = await voiceService.generateVoiceAudio(text, voiceId)
    res.json({ audioUrl })
  } catch (error) {
    logger.error('Error generating voice:', error)
    res.status(500).json({ error: 'Failed to generate voice audio' })
  }
}