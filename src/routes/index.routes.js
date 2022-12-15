import { Router } from 'express'
import commentRouter from './comment.routes'
import postRouter from './post.routes'

const router = Router()

router.use('/comment', commentRouter)
router.use('/post', postRouter)

export default router
