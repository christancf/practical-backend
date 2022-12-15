import Post from '../models/post'
import { getCommentsByPostIdRepository } from './comment'

export const getPostsRepository = async () => {
  try {
    const Posts = await Post.find()
    const PostsWithComments = Posts.map(async (post) => {
      const comments = await getCommentsByPostIdRepository(post._id.toString())

      post = { ...post._doc, comments }
      return post
    })
    return PostsWithComments
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const addPostRepository = async (data) => {
  try {
    return await new Post(data).save()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}
