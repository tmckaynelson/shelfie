
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

module.exports = {
    addProduct,
    getProducts
}