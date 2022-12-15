import Comment from '../models/comment'
import Post from '../models/post'
import { getCommentsByPostIdRepository } from './comment'

export const getPostsRepository = async () => {
  try {
    const PostList = await Post.find()
    const CommentList = await Comment.find()
    console.log('comment::::::;', CommentList)
    const PostsWithComments = PostList.map((post) => {
      const comments = CommentList.filter(
        (comment) => comment.post_id.toString() === post._id.toString(),
      )
      console.log('commentssss::::::;', comments)
      return { ...post._doc, comments }
    })
    console.log(PostsWithComments)
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
