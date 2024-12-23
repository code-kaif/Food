import e from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cart.controler.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = e.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
