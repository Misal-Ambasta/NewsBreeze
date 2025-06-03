import axios from 'axios'
import { logger } from '../utils/logger.js';
import dotenv from 'dotenv';
dotenv.config();


const COQUI_API_URL = 'https://api-inference.huggingface.co/models/coqui/XTTS-v2'
const HF_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;


// Voice mapping for celebrities
const VOICE_MAPPING = {
  'celebrity-1': 'morgan_freeman',
  'celebrity-2': 'david_attenborough', 
  'celebrity-3': 'scarlett_johansson',
  'celebrity-4': 'samuel_jackson',
  'celebrity-5': 'emma_stone'
}

export const voiceService = {
  async generateVoiceAudio(text, voiceId) {
    try {
      const voiceName = VOICE_MAPPING[voiceId] || 'default'
      console.log("Token exists?", !!HF_API_TOKEN); 
      // Note: This is a simplified implementation
      // In production, you'd need to properly configure XTTS-v2
      const response = await axios.post(
        COQUI_API_URL,
        {
          inputs: text,
          parameters: {
            speaker: voiceName,
            language: 'en'
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${HF_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          responseType: 'arraybuffer',
          timeout: 120000 // 2 minutes timeout
        }
      )
      // console.log("response", response.data)
      // Convert response to base64 audio URL
      const audioBase64 = Buffer.from(response.data).toString('base64')
      const audioUrl = `data:audio/wav;base64,${audioBase64}`
      
      return audioUrl
      
    } catch (error) {
      logger.error('Error generating voice audio:', error)
      // if (error.response) {
      //   console.error('API response error:', error.response.status, error.response.data);
      // } else if (error.request) {
      //   console.error('No response received:', error.request);
      // } else {
      //   console.error('Axios error:', error.message);
      // }
      // Fallback: Use Web Speech API synthesis info
      // This would be handled on the frontend as a fallback
      throw new Error('Voice generation temporarily unavailable')
    }
  }
}