import { Router } from "express";
import { recommendCrop } from "../controllers/recommendController";

const router = Router();

router.post("/recommend", recommendCrop);

export default router;
