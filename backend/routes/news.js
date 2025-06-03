import express from 'express'
import { getNews, getNewsSummaries } from '../controllers/newsController.js'

const router = express.Router()

router.get('/', getNews)
router.get('/summaries', getNewsSummaries)

export default router