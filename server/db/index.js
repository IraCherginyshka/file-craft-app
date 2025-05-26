const { Pool } = require("pg");
require("dotenv").config({ path: `../.env.${process.env.NODE_ENV}` });

//  Pool vs Client in pg
// Pool
// ✅ Maintains a pool of reusable connections
// ✅ Faster for apps with many queries
// ✅ Designed for real-world, concurrent usage
// ✅ Automatically manages connections
// Client
// 🚫 Creates a new connection every time
// ❌ Slower, especially under load
// 🚫 Better for simple scripts or one-off queries
// ❌ You have to manually connect/disconnect

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;
