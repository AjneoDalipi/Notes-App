const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ajneo",
    password: "ajneo123",
    host: "localhost",
    port: "5432",
    database: "nodeapp"
});

module.exports = pool;