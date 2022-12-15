import Comment from '../models/comment'

export const getCommentsByPostIdRepository = async (post_id) => {
  try {
    return await Comment.find({ post_id })
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const addCommentRepository = async (data) => {
  try {
    return await new Comment(data).save()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}
