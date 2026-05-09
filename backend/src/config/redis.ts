import { createClient } from "redis";

const isProd = process.env.NODE_ENV === "production";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379",
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 10) {
        return new Error("Redis connection failed ❌");
      }
      return Math.min(retries * 100, 2000);
    },
  },
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();

    console.log(
      `✅ Redis connected in ${isProd ? "PROD" : "DEV"} mode`
    );
  }
};