import React, { Component } from 'react'

export default class Product extends Component {
    
    render() {

        let { name, price, imgUrl, id } = this.props.product
        return (
            <div className="product">
                <p>{ name }</p>
                <p>{ price }</p>
                <img src={ `${imgUrl}` } alt={ name }/>
                <div>
                    <button onClick={ () => this.props.deleteProduct(id) } >Delete</button>
                    <button onClick={ () => this.props.setEdit(id) }>Edit</button>
                </div>
            </div>
        )
    }
}
