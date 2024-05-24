import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use(cors())
app.use(postRoutes);
app.use(userRoutes);
app.use(authRoutes);
export default app;
