const mongoose = require('mongoose');

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const coneccionMongo = async () => {
    try {
        console.log('Conectando a Mongo...')
        await mongoose.connect(MONGO_DB_URI)
        console.log('Conectado a Mongo')

    } catch (error) {
        console.log('error: ', error)
    }
}

module.exports = coneccionMongo;