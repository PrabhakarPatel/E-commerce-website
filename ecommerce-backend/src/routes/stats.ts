import express from "express";
import {
  getBarCharts,
  getDashoardStats,
  getLineCharts,
  getPieCharts,
} from "../controllers/stats.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

//route -/api/v1/dashboard/stats
app.get("/stats", adminOnly, getDashoardStats);
//route -/api/v1/dashboard/pie
app.get("/pie", adminOnly, getPieCharts);
//route -/api/v1/dashboard/bar
app.get("/bar", adminOnly, getBarCharts);
//route -/api/v1/dashboard/line
app.get("/line", adminOnly, getLineCharts);

export default app;
