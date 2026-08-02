/// <reference path="../src/types/express.d.ts" />
import "dotenv/config";
import app from "../src/app";
import { prisma } from "../src/lib/prisma";

// Expose the Express app as a serverless function
export default app;