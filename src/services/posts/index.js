import express from "express";
import createHttpError from "http-errors";
import PostModel from "../../models/post_schema.js";

const router = express.Router();

router.get("/", (req, res, next) => {});

export default router;
