const express = require('express');
// requestAnimationFrame('dotenv').config() //asi usamos en una linia las dos siguientes
const dotenv = require('dotenv')
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

//CRUD DE AUTHORS

app.post('/api/authors', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const nationality = req.body.nationality;
    console.log(name);
    console.log(nationality);

    app.get(
        '/api/authors',
        (req, res) => {
            res.status(200).json(
                {
                    success: true,
                    message: "text"
                }
            )
        }
    )

    app.put(
        'api/authors',
        (req, res) => {
            console.log(req.params.id);
            res.status(200).json(
                {
                    success: true,
                    message: "text"
                }
            )
        })

    //Validar info

    if (!name) { //ejemplo
        return res.status(400).json({
            sucess: false,
            message: 'Name Required'
        })
    }

    //Si hace falta tratamos la info

    let newNationality = nationality.toLowerCase()
    console.log(newNationality);

    // Atacar a la BD para crear 

}
)