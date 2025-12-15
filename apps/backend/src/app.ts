import express from "express";
import { errorHandlerMiddleware } from "@/middleware/global/errorHandler";
import routes from "@/routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Global error handler (must be after routes)
app.use(errorHandlerMiddleware);

export default app;
