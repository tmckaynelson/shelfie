import React, { Component } from 'react'

// components
import Product from '../Product/Product'

export default class Dashboard extends Component {

    render() {

        let mappedProducts = this.props.products.map( (element, index) => {
            return <Product key={ index } product={ element } />
        })
        return (
            <div>
                Dashboard
                { mappedProducts }
            </div>
        )
    }
}
