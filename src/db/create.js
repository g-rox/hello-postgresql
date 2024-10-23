const pool = require(".");

exports.createTable = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
  try {
    await pool.query(query);
    console.log("Table created or already exists.");
  } catch (err) {
    console.error("Error creating table:", err.stack);
  }
};
