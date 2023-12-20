import express from "express";
import { userVerifyToken } from "../middleware/verifyToken";
import { UserController } from "../controllers/user.controller";
const router = express.Router();

router.route("/register").post(UserController.registerUser);
router.route("/login").post(UserController.loginUser);
router
  .route("/me")
  .post(userVerifyToken.verifyToken, UserController.getCurrentUser);

router.route("/user").put(UserController.UpdateUser);
router.route("/user/password").post(UserController.ChangePassword)

export const userRouter = router;