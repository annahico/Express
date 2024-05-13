const express = require('express');
// requestAnimationFrame('dotenv').config() //asi usamos en una linia las dos siguientes
const dotenv = require ('dotenv')
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})