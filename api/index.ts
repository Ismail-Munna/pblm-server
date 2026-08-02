/// <reference path="../src/types/express.d.ts" />
import "dotenv/config";
import app from "../src/app";

// Expose the Express app as a serverless function safely by wrapping it in a handler
export default function handler(req: any, res: any) {
  return app(req, res);
}