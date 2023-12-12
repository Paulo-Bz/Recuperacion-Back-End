require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const PublicacionRouter = require('./routes/PublicacionRoute');
const coneccionMongo = require('./dataBase.js/MongooseDB');
const AutenticacionRouter = require('./routes/AutenticacionRoute');
const UsuarioRouter = require('./routes/UsuarioRoutes');


const app = express();
const PORT = process.env.PORT;

//MIDLEWARES//
app.use(cors());
app.use(bodyParser.json());



//RUTAS//
app.use(PublicacionRouter);
app.use(AutenticacionRouter);
app.use(UsuarioRouter);


app.listen(PORT, () => {
    console.log(`El servidor esta escuchandoen el puerto ${PORT}`);
    coneccionMongo()
});