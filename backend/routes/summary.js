import express from 'express'
import { summarizeText } from '../controllers/summaryController.js'

const router = express.Router()

router.post('/', summarizeText)

export default router 