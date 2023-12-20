import { Request, Response } from "express";
import { serviceService } from "../services/service.service";

const createService = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.createService(req.body);
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

const findAllService = async (req: Request, res: Response) => {
  try {
    const result = await serviceService.findAllService();
    res.status(200).json({
      status: "Find All Service was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const findOneService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await serviceService.findOneService(id);
    res.status(200).json({
      status: "Find One Service was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};


const findServiceByField = async (req: Request, res: Response) => {
  try {
    const field = req.query.q;
    const result = await serviceService.findServiceByField(field as string);
    res.status(200).json({
      status: "Find One Service was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await serviceService.updateService(id, req.body);
    res.status(200).json({
      status: "Update Service was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const deleteService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await serviceService.deleteService(id);
    res.status(200).json({
      status: "Delete Service was successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
  }
};
export const serviceController = {
  createService,
  findAllService,
  findOneService,
  updateService,
  deleteService,
  findServiceByField
};
