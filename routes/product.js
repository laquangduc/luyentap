import express from 'express'
import { create, lish, productId, read } from '../controllers/product'
const router = express.Router()

router.post('/products', create)
router.get('/products', lish)
router.get('/product/:id', read)

router.param('id', productId)

module.exports = router