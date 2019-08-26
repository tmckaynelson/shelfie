import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    
    render() {

        let { name, price, id } = this.props.product
        let imgUrl = this.props.product.img

        return (
            <div className="product">
                <p>{ name }</p>
                <p>{ price }</p>
                <img src={ `${imgUrl}` } alt={ name }/>
                <div>
                    <Link to='/' onClick={ () => this.props.deleteProduct(id) } >Delete</Link>
                    <Link to={`/edit/${id}`} onClick={ () => this.props.setEdit(id) }>Edit</Link>
                </div>
            </div>
        )
    }
}
