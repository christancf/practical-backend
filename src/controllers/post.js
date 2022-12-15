import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addPostService, getPostsService } from '../services/post'

export const addPost = asyncHandler(async (req, res, next) => {
  const result = await addPostService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Post Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Post Creation Successful.' })
})

export const getPosts = asyncHandler(async (req, res, next) => {
  const result = await getPostsService()
  if (!result) return makeResponse({ res, status: 500, message: 'Post Fetch failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Post Fetch Successful.', data: result })
})
