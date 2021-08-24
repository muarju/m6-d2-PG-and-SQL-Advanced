import pg from "pg";
// pools will use environment variables
// for connection information
const { Pool } = pg;

console.log(process.env.NODE_ENV);
const db = new Pool();

export default db;
