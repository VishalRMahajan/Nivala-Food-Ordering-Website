import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder,userOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/user",authMiddleware,userOrders)

export default orderRouter;