const express = require('express')
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')
const app = express()
app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('las credenciales de la base de datos son correctas')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('la base de datos se sincronizo correctamente ')
    })
    .catch((err) => {
        console.log(err)// error en las tablas ,propiedades, etc
    })


app.get('/', (req, res) => {
    res.json({
        message: 'My Server Is Ok !'

    })
})

app.use('/api/v1', postRouter)

app.listen(9000, () => {
    console.log('Server Started at port 9000')
})










module.exports = app
