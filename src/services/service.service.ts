import mongoose from "mongoose";
import { Service } from "../models/service.model";
import { ObjectId } from "mongodb";
const createService = async (data: any) => {
  try {
    const result = await Service.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const findAllService = async () => {
  try {
    const result = await Service.find({});
    return result;
  } catch (error) {
    throw error;
  }
};

const findOneService = async (id: string) => {
  try {
    const uid = new mongoose.Types.ObjectId(id);
    const result = await Service.findById(uid);
    return result;
  } catch (error) {
    throw error;
  }
};


const findServiceByField = async (field: string) => {
  try {
    const result = await Service.find({slug: field})
    return result;
  } catch (error) {
    throw error;
  }
};


const updateService = async (id: string, data: any) => {
  try {
    const uid = new mongoose.Types.ObjectId(id);
    const result = await Service.findOneAndUpdate({ _id: uid }, {$set: data}, {
      new: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (id: string) => {
  try {
    const uid = new mongoose.Types.ObjectId(id);
    const result = await Service.deleteOne(uid);
    return result;
  } catch (error) {
    throw error;
  }
};
export const serviceService = {
  createService,
  findAllService,
  findOneService,
  updateService,
  deleteService,
  findServiceByField
};
