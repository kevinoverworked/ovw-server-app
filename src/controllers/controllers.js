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
        client.end();
    });
};
module.exports.getAllUsers = getAllUsers;


const loginUser = (req, res, next) => {
    client.query(`SELECT * FROM public."Users" WHERE user_uuid =${login.username} AND user_password = ${login.password}`, (err, result) => {
        try {
            let api = result.rows;
            res.status(200).json(api);
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
        client.end();
    });
};
module.exports.loginUser = loginUser;