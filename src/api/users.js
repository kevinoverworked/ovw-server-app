const { getDatabase } = require("../connections/connections");

const collectionName = 'public."Users"';

async function getUser(req, res, next) {
    const database = await getDatabase();
    let api;
    await database.query('SELECT * FROM public."Users"', (err, result) => {
        try {
            api = result.rows;
        } catch (err) {
            console.log({ error: err.message || err.toString() });
        }
        database.end();
    });
    return await api;
}

module.exports = {
    getUser
};