import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

export default router;
