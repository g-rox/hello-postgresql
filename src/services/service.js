const pool = require("../db");

exports.getUsers = async () => {
  try {
    const response = await pool.query("SELECT * FROM users");
    return response.rows;
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createUser = async (name, email) => {
  const query = `
  INSERT INTO users (name, email)
  VALUES ($1, $2)
  RETURNING *;
`;
  try {
    return await pool.query(query, [name, email]);
  } catch (error) {
    console.log("Error", error);
  }
};
