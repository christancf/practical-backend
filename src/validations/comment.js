import { Joi } from 'celebrate'

const COMMENT_MAX_LENGTH = 1000

export const addCommentValidation = Joi.object({
  content: Joi.string()
    .max(COMMENT_MAX_LENGTH)
    .required()
    .error((errors) =>
      errors.map((error) => {
        if (error.code === 'any.max') {
          error.message = `Comment must be less than ${COMMENT_MAX_LENGTH} characters`
          return error
        }
      }),
    ),
  post_id: Joi.string().required(),
})
