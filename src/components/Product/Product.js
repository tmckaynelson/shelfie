import React, { Component } from 'react'

export default class Product extends Component {

    
    render() {

        let { name, price, imgUrl } = this.props.product
        return (
            <div>
                <p>{ name }</p>
                <p>{ price }</p>
                <img src={ imgUrl } alt={ name }/>
            </div>
        )
    }
}
