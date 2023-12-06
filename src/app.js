require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const PublicacionRouter = require('./routes/PublicacionRoute');
const coneccionMongo = require('./dataBase.js/MongooseDB');
const cors = require('cors');
const AutenticacionRouter = require('./routes/AutenticacionRoute');

const app = express();
const PORT = process.env.PORT;

//MIDLEWARES//
app.use(cors());
app.use(bodyParser.json());


//RUTA//
app.use(PublicacionRouter);
app.use(AutenticacionRouter);

app.listen(PORT, () => {
    console.log(`El servidor esta escuchandoen el puerto ${PORT}`);
    coneccionMongo()
});