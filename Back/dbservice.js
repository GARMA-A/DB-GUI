const sql = require('mssql/msnodesqlv8');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();


const config = {

    database: 'GirgsEmad',
    server: 'DESKTOP-N5UH31J\\NIGHTMARESQL',
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true
    }
  };
  

  const pool = new sql.ConnectionPool(config);
  const poolConnect = pool.connect();
  
  poolConnect.then(() => {
    console.log('connected successfully');
    // return pool.request().query('SELECT * FROM names');
  })
  

   const getAllData = async () => {
        try {
            const result = await pool.request().query('SELECT * FROM names');
            return result;
            }
        catch (error) {
            console.log(error);
        }
    }


    const insertNewName = async(name)=> {
        try {
            const dateAdded = new Date();
            const result = await pool.request()
            .input('id', sql.Int, 10)
            .input('name', sql.NVarChar, name)
            .input('dateAdded', sql.DateTime, dateAdded)
            .query('INSERT INTO names (id, n_name, date_added) VALUES (@id, @name, @dateAdded)');
             
        } catch (error) {
            console.log(error);
        }
    }

    const deleteRowById = async (id) =>{
        try {
            const result = await pool.request().query(`DELETE FROM names WHERE id = ${id}`);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const updateNameById = async(id, name) =>{       
        try {
            const result = await pool.request().query(`UPDATE names SET n_name = '${name}' WHERE id = ${id};`);
         
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const searchByName = async(name) => {
        try {

            const result = await pool.request().query(`SELECT * FROM names WHERE n_name = '${name}';`);
            return result;
        } catch (error) {
            console.log(error);
        }
    }


    module.exports ={
    getAllData,
    insertNewName,
    deleteRowById,
    updateNameById,
    searchByName

}