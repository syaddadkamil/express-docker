const { Pool } = require("pg");
const pool = new Pool({
  host: "db-postgres",
  port: 5432,
  user: "user",
  password: "password",
  database: "V6-DB",
});

module.exports = pool;
