const result = require('dotenv').config()

if (result.error) throw result.error

const express = require('express')
const cors = require('cors')
const massive = require('massive')
const productCtrl = require('./controller')

const { CONNECTION_STRING } = process.env

// setup app
const app = express()

// TLMs
app.use(express.json())
app.use(cors())

// connect db
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
})
.catch( error => {
    console.log(error)
})

// endpoints

app.post('/api/product', productCtrl.addProduct)
app.get('/api/inventory', productCtrl.getProducts)
app.get('/api/product/:id', productCtrl.getProduct)
app.delete('/api/product/:id', productCtrl.deleteProduct)
app.put('/api/product/:id', productCtrl.editProduct)


// server is listening
app.listen(8080, () => {
    console.log('server running on port 8080')

})