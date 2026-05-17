import { app } from "../backend/src/app";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Export the Express app as a Vercel serverless function
export default app;
