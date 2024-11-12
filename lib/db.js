// lib/mysql.ts
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST,       //mysql server hostname
  user: process.env.DB_USER,       //mysql server username
  password: process.env.DB_PASSWORD,  //mysql server password
  database: process.env.DB_DATABASE,  //mysql database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
