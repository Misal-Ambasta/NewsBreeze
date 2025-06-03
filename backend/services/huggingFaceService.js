import axios from 'axios'
import { logger } from '../utils/logger.js';
import dotenv from 'dotenv';
dotenv.config();

const HF_API_URL = 'https://api-inference.huggingface.co/models/Falconsai/text_summarization'
const HF_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN

export const huggingFaceService = {
  async summarizeText(text) {
    try {
      if (!text || text.length < 50) {
        return text
      }
      
      const response = await axios.post(
        HF_API_URL,
        {
          inputs: text.substring(0, 1000), // Limit input length
          parameters: {
            max_length: 150,
            min_length: 50,
            do_sample: false
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${HF_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000
        }
      )
      
      if (response.data && response.data[0] && response.data[0].summary_text) {
        return response.data[0].summary_text
      }
      
      // Fallback to truncated original text
      return text.substring(0, 200) + '...'
      
    } catch (error) {
      logger.error('Error summarizing with Hugging Face:', error)
      // Fallback to simple truncation
      return text.substring(0, 200) + '...'
    }
  }
}