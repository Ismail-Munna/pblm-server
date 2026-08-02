/// <reference path="../src/types/express.d.ts" />
import "dotenv/config";
import app from "../src/app";
import { prisma } from "../src/lib/prisma";

export default async function handler(req: any, res: any) {
  try {
    // Explicitly connect to Prisma to catch startup/connection errors natively
    await prisma.$connect();
    
    // Invoke the Express app
    return app(req, res);
  } catch (error: any) {
    console.error("CRITICAL VERCEL RUNTIME ERROR:", error);
    
    // Fallback error response instead of crashing the Lambda
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: "Serverless Initialization Failed",
        error: error.message || String(error),
        stack: process.env.NODE_ENV !== "production" ? error.stack : undefined
      });
    }
  }
}