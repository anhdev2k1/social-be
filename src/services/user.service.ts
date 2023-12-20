import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
const registerUser = async (data: any) => {
  try {
    const { password, email } = data;
    let foundUser = await User.findOne({ email });

    if (foundUser) {
      throw new Error("Email đã được sử dụng!");
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    data.password = hashPassword;

    if (!foundUser) {
      foundUser = await User.create(data);
    }
    const token = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      process.env.TOKEN_SECRET as string
    );
    
    return { ...foundUser?.toObject(), token };
  } catch (error) {
    throw error;
  }
};

const LoginUser = async (data: any) => {
  try {
    const { email, password } = data;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      throw new Error("Có vẻ Email bạn nhập không đúng!");
    }
    const isMatchPassword = bcrypt.compareSync(
      password,
      isUser.password as string
    );
    if (!isMatchPassword) {
      throw new Error("Mật khẩu bạn nhập không đúng!");
    }
    const token = jwt.sign(
      { id: isUser._id, email: isUser.email },
      process.env.TOKEN_SECRET as string
    );
    return { ...isUser.toObject(), token };
  } catch (error) {
    throw error;
  }
};
const getCurrentUser = async (data: any) => {
  const { id } = data;
  const uid = new ObjectId(id);
  const isCurrentUser = await User.findOne({ _id: uid });
  return isCurrentUser;
};
const UpdateUser = async (data: any) => {
  
};

const ChangePassword = async (data: any) => {
  const { id, password } = data;
  const uid = new ObjectId(id)
  try {
    const isUser = await User.findOne({ _id: uid });
    const isMatchPassword = bcrypt.compareSync(password, isUser?.password as string);
    if (!isMatchPassword) {
      throw new Error("Mật khẩu bạn nhập không đúng!");
    }
    return isUser;
  } catch (error) {
    throw error;
  }
};

export const UserService = { registerUser, LoginUser, getCurrentUser, UpdateUser, ChangePassword };
