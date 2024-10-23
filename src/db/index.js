const { Pool } = require("pg");

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.POSTGRES_USER || "admin",
  host: "localhost",
  database: process.env.POSTGRES_DB || "hello",
  password: process.env.POSTGRES_PASSWORD || "admin",
  port: 5432,
});

// Check if the connection is successful
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to PostgreSQL database");
  release();
});

// Export the pool for use in other modules
module.exports = pool;
