const express = require("express");
const config = require("./config/config");
const cors = require("cors");
const create = require("./db/create.js");

const app = express();

// create db table
create.createTable();

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const routes = require("./routes/routes");
app.use("/api/user", routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
