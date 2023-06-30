import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "po8lvwbqb7",
  apiKey: process.env.API_KEY,
});
