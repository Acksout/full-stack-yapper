import express from "express";
// import router from "./message.routes";
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSidebar} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
