import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bookingRoutes from "./modules/booking/booking.route.js";

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/api", bookingRoutes);

export default app;