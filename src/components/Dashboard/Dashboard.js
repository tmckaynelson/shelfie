import React, { Component } from 'react'
import axios from 'axios'

// components
import Product from '../Product/Product'

export default class Dashboard extends Component {

    deleteProduct = (id) => {


        axios.delete(`/api/product/${id}`).then( response => {

            this.props.get()
        })
        .catch( error => {
            console.log(error)
        })
    }

    render() {

        let mappedProducts = this.props.products.map( (element, index) => {
            return <Product key={ index } product={ element } deleteProduct={ this.deleteProduct } setEdit={ this.props.setEdit } />
        })

        return (
            <div>
                Dashboard
                { mappedProducts }
            </div>
        )
    }
}
