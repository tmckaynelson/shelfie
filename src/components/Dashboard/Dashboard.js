import React, { Component } from 'react'
import axios from 'axios'

// components
import Product from '../Product/Product'

export default class Dashboard extends Component {

    constructor() {
        super()
    
        this.state = {
          inventory: [],
          currentEdit: null
        }
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then( response => {

            this.getAll()
        })
        .catch( error => {
            console.log(error)
        })
    }
    
    componentDidMount = () => {
        
        this.getAll()
    }
    
    getAll = () => {
        axios.get('/api/inventory')
        .then( response => {
            this.setState({
            inventory: response.data
            })
        })
        .catch( error => {
            console.log(error)
        })
    }

    setEdit = (id) => {
        this.setState({
            currentEdit: id
        })
    }

    render() {

        let mappedProducts = this.state.inventory.map( (element, index) => {
            return <Product key={ index } product={ element } deleteProduct={ this.deleteProduct } setEdit={ this.setEdit } />
        })

        return (
            <div>
                { mappedProducts }
            </div>
        )
    }
}
