import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});
app.get("/test", (req: Request, res: Response) => {
  res.json({
    message: "Hello from the backend!",
  });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
