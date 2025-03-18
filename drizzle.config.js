import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
    url: "postgresql://neondb_owner:npg_5ybTBp7CswOZ@ep-gentle-dew-a5rhudb8-pooler.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require",
  }
})