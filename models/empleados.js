const pool = require("./../utils/bd"); // referencia de la conexion de bd de sql
const TABLA_EMPLEADOS = "empleados"

const get = async () => {
    const query = "SELECT id_empleado, nombre, apellido FROM ?? ";
    const params = [TABLA_EMPLEADOS];
    const rows = await pool.query(query, params);
  
    return rows;
}
const single = async (id) =>{
    const query = `SELECT id_empleado, nombre, apellido FROM ?? WHERE id = ? `;
    const params = [TABLA_EMPLEADOS, id];
    const rows = await pool.query(query, params);
    return rows;

}
const borrar = async(id) => {

}


module.exports = {get,single}