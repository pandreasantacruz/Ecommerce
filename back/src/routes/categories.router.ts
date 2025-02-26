import { Router } from "express";
import { getCategoroiesController } from "../controllers/categories.controller";

const router = Router();

router.get("/", getCategoroiesController);
export default router;
