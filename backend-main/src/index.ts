import express from "express";
import cors from "cors";
import recommendRoutes from "./routes/recommendRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ status: "Jacob Crop AI (Bun + TS) is running 🌾" });
});

app.use("/", recommendRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🌾 Server running on http://localhost:${PORT}`);
});
