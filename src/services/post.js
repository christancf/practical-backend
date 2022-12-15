import { addPostRepository, getPostsRepository } from '../repositories/post'
export const addPostService = async (data) => {
  try {
    return await addPostRepository(data)
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getPostsService = async () => {
  try {
    return await getPostsRepository()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}
