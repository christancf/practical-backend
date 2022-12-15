import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addCommentService, getCommentsByPostIdService } from '../services/comment'

export const addComment = asyncHandler(async (req, res, next) => {
  const result = await addCommentService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Comment Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Comment Creation Successful.' })
})

export const getCommentsByPostId = asyncHandler(async (req, res, next) => {
  const result = await getCommentsByPostIdService(req.params.post_id)
  if (!result) return makeResponse({ res, status: 500, message: 'Comment Fetch failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Comment Fetch Successful.', data: result })
})
