import express from "express";
import {
  getPlantsData,
  analyzePlantData,
  predictPlantData,
  getPlantsNames
} from "../controllers/PlantController.js";

const router = express.Router();

router.get("/plantsData/", getPlantsData);
router.get("/plantsNames/", getPlantsNames);
router.get("/AnalyzeData/", analyzePlantData);
router.get("/predict/:label", predictPlantData);

export default router;
