import express from 'express';
import giftData from "../data/gift_json.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(giftData);
})

export default router;