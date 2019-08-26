
const addProduct = (req, res) => {

    const { name, price, imgUrl } = req.body
    
    const db = req.app.get('db')
    db.add_product([name, price, imgUrl]).then( response => {
        res.status(200).send()
    })
    .catch( error => {
        console.log(error)
        res.status(500).send('error adding product')
    })
}

const getProducts = (req, res) => {

    const db = req.app.get('db')

    db.get_products().then( response => {
        res.status(200).send(response)
    })
    .catch( err0r => {
        console.log(error)
        res.status(500).send('error getting inventory')
    })
}

const deleteProduct = (req, res) => {

    const { id } = req.params

    const db = req.app.get('db')
    db.delete_product([id]).then( resonse =>{
        res.status(200).send()
    })
    .catch( error => {
        console.log(error)
    })
}

const getProduct = (req, res) => {
    console.log('hit get one')

    const { id } = req.params

    const db = req.app.get('db')
    db.get_product([id]).then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        console.log(error)
    })
}

const editProduct = (req, res) => {

    const { id } = req.params

    const { name, price, imgUrl } = req.body

    const db = req.app.get('db')
    db.edit_product([name, price, imgUrl, id]).then( response => {
        res.status(200).send()
    })
    .catch( error => {
        console.log(error)
    })
}

module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    getProduct,
    editProduct
}