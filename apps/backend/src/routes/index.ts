import { type Response, Router } from "express";
import coursesRouter from "@/routes/courses.routes";
import type { ApiMessageResponse } from "@/types/api";

const router = Router();

router.get("/", (_req, res: Response<ApiMessageResponse>) => {
  res.json({ message: "API is running" });
});

router.use('/courses', coursesRouter);

export default router;
