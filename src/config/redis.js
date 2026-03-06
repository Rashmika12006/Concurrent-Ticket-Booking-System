import { createClient } from "redis";

// Use environment variable (works locally and on deployment platforms)
const redisUrl =
  process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL || "redis://localhost:6379";

const redisClient = createClient({
  url: redisUrl
});

// Handle Redis errors
redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

// Connect function
const connectRedis = async () => {
  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
      console.log("✅ Redis Connected");
    }
  } catch (error) {
    console.error("❌ Redis connection failed:", error);
  }
};

export { redisClient, connectRedis };