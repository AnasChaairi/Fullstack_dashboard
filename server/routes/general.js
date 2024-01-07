import express from "express";
import { getPlant, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/plant/:label", getPlant);
router.get("/dashboard", getDashboardStats);

export default router;
