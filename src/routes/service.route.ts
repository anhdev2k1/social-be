import express from "express";
import { serviceController } from "../controllers/service.controller";

const router = express.Router();

router.route("/services").get(serviceController.findAllService);

router.route("/service").post(serviceController.createService).get(serviceController.findServiceByField);

router
  .route("/service/:id")
  .patch(serviceController.updateService)
  .delete(serviceController.deleteService)
  .get(serviceController.findOneService);

export const serviceRouter = router;
