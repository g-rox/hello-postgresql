const pool = require("../db");

exports.getUsers = async () => {
  try {
    return await pool.query("SELECT * FROM users");
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createUser = async (name) => {
  const query = `
  INSERT INTO users (name)
  VALUES ($1)
  RETURNING *;
`;
  try {
    return await pool.query(query, [name]);
  } catch (error) {
    console.log("Error", error);
  }
};
