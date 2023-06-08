import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://maerbarrondo:inRrqe83TQDvqaWT@cluster0.l8ei5dt.mongodb.net/test";
