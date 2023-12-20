import mongoose, { Schema } from 'mongoose';
const ServiceSchema = new Schema(
  {
    name_service: {
      type: String,
      require: true
    },
    slug: {
        type: String,
        require: false
    },
    deletedAt: Date,
  },
  { timestamps: true }
);
const ServiceModel = mongoose.model('Service', ServiceSchema);
export const Service = ServiceModel;