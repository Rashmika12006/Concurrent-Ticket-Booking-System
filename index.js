import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { connectRedis } from "./src/config/redis.js";

await connectRedis();

export default app;