import { Joi } from 'celebrate'

const TITLE_MAX_LENGTH = 100
const CONTENT_MAX_LENGTH = 1000
const COLOR_CODE_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

export const addPostValidation = Joi.object({
  title: Joi.string()
    .max(TITLE_MAX_LENGTH)
    .required()
    .error(() => {
      return {
        message: `Title must be less than ${TITLE_MAX_LENGTH} characters`,
      }
    }),
  content: Joi.string()
    .max(CONTENT_MAX_LENGTH)
    .required()
    .error(() => {
      return {
        message: `Content must be less than ${CONTENT_MAX_LENGTH} characters`,
      }
    }),
  title_color: Joi.string()
    .regex(COLOR_CODE_PATTERN)
    .required()
    .error(() => {
      return {
        message: 'Title color must be a valid hex color code',
      }
    }),
})
