const express = require('express');
// requestAnimationFrame('dotenv').config() //asi usamos en una linia las dos siguientes
const dotenv = require ('dotenv')
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/api/healthy', (req, rest) => { //esto determina si el server esta caído o no
    rest.status(200).json(
        {
            success: true,
            message: "My APP server is healthy"
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

//NO SE TOCA EL CÓDIGO, PERMANECERÁ INTACTO