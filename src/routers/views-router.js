import { Router } from 'express'
import { privateRoutes } from '../middlewares/auth.js'
import { viewProducts, viewProductsRealTime } from '../controllers/view.js'

const router = Router()

router.get('/', privateRoutes, viewProducts)

router.get('/realTimeProducts', privateRoutes, viewProductsRealTime)

export default router
