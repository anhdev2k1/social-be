import { Request, Response } from "express";
import { postService } from "../services/post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);
    res.status(200).json({
      status: "Register successfully!!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const findAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.findAllPost();
    res.status(200).json({
      status: "Find All Post was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const findOnePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await postService.findOnePost(id);
    res.status(200).json({
      status: "Find One Post was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const findPostByField = async (req: Request, res: Response) => {
  try {
    const field = req.query.q;
    const result = await postService.findPostByField(field as string);
    res.status(200).json({
      status: "Find One Post was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const findAllPostRelated = async (req: Request, res: Response) => {
  try {
    const {service_id} = req.params;
    const result = await postService.findAllPostRelated(service_id as string);
    res.status(200).json({
      status: "Find all post related was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await postService.updatePost(id, req.body);
    res.status(200).json({
      status: "Update Post was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await postService.deletePost(id);
    res.status(200).json({
      status: "Delete Post was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
export const postController = {
  createPost,
  findAllPost,
  findOnePost,
  updatePost,
  deletePost,
  findPostByField,
  findAllPostRelated
};
