import express from "express";

//import products from "../data/products.js";
import {
    authUser,
    deleteUser,
    getUserById,
    getUserProfile,
    getUsers,
    logoutUser,
    registerUser,
    UpdateUser,
    updateUserProfile,
} from "../controllers/userController.js";

import { admin, protect } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(protect, admin, getUsers);
userRoutes.post("/logout", logoutUser);
userRoutes.post("/auth", authUser);
userRoutes
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRoutes
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, UpdateUser);

//()
export default userRoutes;
