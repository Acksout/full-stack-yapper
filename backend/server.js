import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use(express.json()); // middleware to parse JSON data in the body of the request

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
