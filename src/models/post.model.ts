import mongoose, { Schema } from 'mongoose';
const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    slug: {
        type: String,
        require: false
    },
    service_id: {
        type: Schema.Types.ObjectId,
        ref: "Service",
    },
    deletedAt: Date,
  },
  { timestamps: true }
);
const PostModel = mongoose.model('Post', PostSchema);
export const Post = PostModel;