import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getCategoriesService } from "../services/categories.service";

export const getCategoroiesController = catchedController(
  async (req: Request, res: Response) => {
    const categories = await getCategoriesService();
    res.json(categories);
  }
);
