//const client = require("../connections/connections").instance;
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,// || 'postgresql://postgres:Superoverworked1!@localhost:5432/postgres',
  ssl: false /*{
    rejectUnauthorized: false
  }*/
});

client.connect();


const getAllUsers = (req, res, next) => {
    client.query('SELECT * FROM public."Users"', (err, result) => {
        try {
            let api = result.rows;
            res.status(200).json(api);
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
        
    });
};


const getUserById = (req, res, next) => {
    const id = req.params.id;
    client.query('SELECT * FROM public."Users" WHERE user_uuid = $1', [id], (err, result) => {
        try {
            let api = result.rows;
            res.status(200).json(api);
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
        
    });
};

const updateUser = (request, response) => {
    const id = request.params.id;
    const { firstname, email } = request.body;
  
    client.query(
      'UPDATE public."Users" SET user_firstname = $1, user_email = $2 WHERE user_uuid = $3',
      [firstname, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    );
  }



const loginUser = (req, res, next) => {
    client.query(`SELECT * FROM public."Users" WHERE user_uuid =${login.username} AND user_password = ${login.password}`, (err, result) => {
        try {
            let api = result.rows;
            res.status(200).json(api);
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
        
    });
};


module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    loginUser
};