const mysql = require("mysql");
const util = require("util");

//consultas en crudo: SELECT * FROM usuarios
// para proyectos mas grandes usamos query buildes (knex)


const pool = mysql.createPool({
    host: process.env.BD_HOST || 'localhost',
    port: process.env.BD_PORT || 3306,
    password: process.env.BD_PASSWORD || '',
    user: process.env.BD_USER || 'root',
    database: process.env.BD_NAME || 'pwi2021',
    connectionLimit : 10 // si sobrepasamos 10 se meten las consultas en una cola FIFO
})

//que es un pool? Es una cola de conexiones recurrentes(maximo 10 conexiones)

pool.query = util.promisify(pool.query)
//Lo convertimos en promise y evita el callback hell

module.exports = pool;