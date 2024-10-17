import express from "express";
import { addpromo,getallpromo,updatepromo,deletepromo,checkpromoandgetdetails } from "../controllers/promoController.js";

const PromoRouter = express.Router();

PromoRouter.post("/add",addpromo);
PromoRouter.get("/all",getallpromo)
PromoRouter.put("/update",updatepromo)
PromoRouter.post("/delete",deletepromo)
PromoRouter.post("/check",checkpromoandgetdetails)

export default PromoRouter;
