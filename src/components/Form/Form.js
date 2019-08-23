import React, { Component } from 'react'
import axios from 'axios'

import './Form.css'

export default class Form extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    componentDidMount = () => {
        console.log('run did mount')
    }

    cancel = (event) => {
        event.preventDefault()

        this.clearInput()
    }

    add = (event) => {
        event.preventDefault()
        
        axios.post('/api/product', this.state)
        .then( response => {

        })
        .catch( error => {
            console.log(error)
        })

        this.clearInput()
    }

    clearInput = () => {

        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }

    render() {

        return (
            <div className="form">
                <img src={ this.state.imgUrl } alt={ this.state.name } />
                <label>Image URL:</label>
                <input type="text" value={ this.state.imgUrl } onChange={ event => { this.setState({ imgUrl: event.target.value }) } } />
                <label>Product Name:</label>
                <input type="text" value={ this.state.name } onChange={ event => { this.setState({ name: event.target.value }) } } />
                <label>Price:</label>
                <input type="text" value={ this.state.price } onChange={ event => { this.setState({ price: event.target.value }) } } />                
                <div>
                    <button onClick={ this.cancel }>Cancel</button>
                    <button onClick={ this.add }>Add to Inventory</button>
                </div>
            </div>
        )
    }
}
