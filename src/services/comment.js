import { addCommentRepository, getCommentsByPostIdRepository } from '../repositories/comment.js'
export const addCommentService = async (data) => {
  try {
    return await addCommentRepository(data)
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getCommentsByPostIdService = async (post_id) => {
  try {
    return await getCommentsByPostIdRepository(post_id)
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}
