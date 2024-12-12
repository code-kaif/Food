import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import foodRouter from "./routes/food.route.js";
import userRouter from "./routes/user.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";
import "dotenv/config";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connect
connectDb();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(process.env.PORT, () => console.log("Server is Running"));
