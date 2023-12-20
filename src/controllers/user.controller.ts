import { Request, Response } from "express";
import { UserService } from "../services/user.service";


const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.registerUser(req.body);
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

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.LoginUser(req.body);
    res.status(200).json({
      status: "Login successfully!!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getCurrentUser = async (req: any, res: Response) => {
  try {
    const { user } = req;
    const result = await UserService.getCurrentUser(user);
    res.status(200).json({
      status: "Login successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};

const ChangePassword = async (req: Request, res: Response) => {
  try {
    const result = await UserService.ChangePassword(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      data: error.message,
    });
  }
};

const UpdateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.UpdateUser(req.body);
    res.status(200).json({
      status: "Update successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      data: error,
    });
  }
};

export const UserController = {
  loginUser,
  registerUser,
  getCurrentUser,
  UpdateUser,
  ChangePassword,
};