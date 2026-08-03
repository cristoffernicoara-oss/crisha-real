import fs from "node:fs";
import path from "node:path";
import pino from "pino";
import { AUTOMATION_ROOT } from "../config.js";

const logsDir = path.join(AUTOMATION_ROOT, "logs");
fs.mkdirSync(logsDir, { recursive: true });

const isProd = process.env.NODE_ENV === "production";

export const logger = pino(
  {
    level: process.env.LOG_LEVEL ?? "info",
  },
  isProd
    ? pino.destination(path.join(logsDir, "automation.log"))
    : pino.transport({
        target: "pino-pretty",
        options: { colorize: true, translateTime: "SYS:standard" },
      })
);
