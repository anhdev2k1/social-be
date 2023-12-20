import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true
    },
    password: {
        type: String,
        require: false
    },
    deletedAt: Date,
  },
  { timestamps: true }
);
const UserModel = mongoose.model('User', UserSchema);
export const User = UserModel;