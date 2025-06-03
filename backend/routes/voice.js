import express from 'express'
import { generateVoice } from '../controllers/voiceController.js'

const router = express.Router()

router.post('/generate', generateVoice)

export default router