import app from "./src/app.js";
import { connectRedis } from "./src/config/redis.js";

await connectRedis();

app.listen(3000, () => {
    console.log("Server started successfully");
})