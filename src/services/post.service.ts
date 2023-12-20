import mongoose from "mongoose";
import { Service } from "../models/service.model";
import { Post } from "../models/post.model";
const createPost = async (data: any) => {
  try {
    const result = await Post.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const findAllPost = async () => {
  try {
    const result = await Post.find({}, "-content").populate("service_id");
    return result;
  } catch (error) {
    throw error;
  }
};

const findOnePost = async (id: string) => {
  try {
    const uid = new mongoose.Types.ObjectId(id);
    const result = await Post.findOne({_id: uid}).populate("service_id");
    return result;
  } catch (error) {
    throw error;
  }
};

const findPostByField = async (field: string) => {
  try {
    const result = await Post.find({
      $or: [{ slug: field }, { service_id: new mongoose.Types.ObjectId(field) }],
    }, "-content").populate("service_id");
    return result;
  } catch (error) {
    throw error;
  }
};


const findAllPostRelated = async (serviceID: string) => {
  try {
    const result = await Post.find({ service_id: new mongoose.Types.ObjectId(serviceID)}, "-content").populate("service_id");
    return result;
  } catch (error) {
    throw error;
  }
};


const updatePost = async (id: string, data: any) => {
  try {
    const uid = new mongoose.Types.ObjectId(id); 
    const result = await Post.findByIdAndUpdate(uid, {$set: data}, {
      new: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const deletePost = async (id: string) => {
  try {
    const uid = new mongoose.Types.ObjectId(id);
    const result = await Post.deleteOne(uid);
    return result;
  } catch (error) {
    throw error;
  }
};
export const postService = {
  createPost,
  findAllPost,
  findOnePost,
  updatePost,
  deletePost,
  findPostByField,
  findAllPostRelated
};
