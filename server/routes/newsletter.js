import express from "express";
import { subscribe } from "../controllers/newsletter.js";

const router = express.Router();

router.post("/newsletter/subscribe", subscribe);

export default router;
