import { Router } from 'express'
import { getPosts, addPost } from '../controllers/post'
import { celebrate, Segments } from 'celebrate'
import { addPostValidation } from '../validations/post'
const router = Router()

router.get('/', getPosts)
router.post('/add', celebrate({ [Segments.BODY]: addPostValidation }), addPost)

export default router
