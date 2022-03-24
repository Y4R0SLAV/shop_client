require('dotenv').config()

const Pool = require('pg').Pool

const db_user = process.env.db_user
const db_password = process.env.db_password
const db_host = process.env.db_host
const db_port = process.env.db_port
const db_database = process.env.db_database

const pool = new Pool({
  user: db_user,
  password: db_password,
  host: db_host,
  port: db_port,
  database: db_database
})


module.exports = pool