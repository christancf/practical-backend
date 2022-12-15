import Post from '../models/post'
import { getCommentsByPostIdRepository } from './comment'

export const getPostsRepository = async () => {
  try {
    const Posts = await Post.find()
    Posts.map(async (post) => {
      post.comments = await getCommentsByPostIdRepository(post._id)
      console.log('post comments :::::::::::', post._id, post.comments)
    })
    return Posts
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
