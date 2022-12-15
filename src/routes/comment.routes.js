import { Router } from 'express'
import { getCommentsByPostId, addComment } from '../controllers/comment'
import { celebrate, Segments } from 'celebrate'
import { addCommentValidation } from '../validations/comment'

const router = Router()

router.get('/:post_id', getCommentsByPostId)
router.post('/add', celebrate({ [Segments.BODY]: addCommentValidation }), addComment)

export default router
