import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.route";
import libraryRoutes from "./routes/library.routes";
import courseRoutes from "./routes/course.route";
import lectureRoutes from "./routes/lecture.route";
import certificateRoutes from "./routes/certificate.routes";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to ScholarSwap 🚀" });
});

// =============================
// 🔐 AUTH ROUTES
// =============================
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/library", libraryRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/lecture", lectureRoutes);
app.use("/api/certificate", certificateRoutes);


// =============================
// ❌ GLOBAL ERROR HANDLER (basic)
// =============================
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;