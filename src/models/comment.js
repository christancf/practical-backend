import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated' },
  },
)

const Comment = mongoose.model('comment', CommentSchema)

export default Comment
