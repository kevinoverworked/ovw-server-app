const { Client } = require('pg');

/*const client = new Client({
  connectionString: process.env.DATABASE_URL,// || 'postgresql://postgres:Superoverworked1!@localhost:5432/postgres',
  ssl: false /*{
    rejectUnauthorized: false
  }
});

client.connect();*/

//module.exports.client = client;

/*const singleton = {};
Object.defineProperty(singleton, "instance", {
    get: function () {
        return client;
    }
});
Object.freeze(singleton);

module.exports.singleton = singleton;*/


let database = null;

async function startDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: false /*{
      rejectUnauthorized: false
    }*/
  });

  database = client.connect();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase
};