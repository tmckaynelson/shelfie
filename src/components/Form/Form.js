import React, { Component } from 'react'
import axios from 'axios'

import './Form.css'

export default class Form extends Component {

    constructor() {
        super()


        this.defaultImg = 'data:image/png;base64,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'
        this.state = {
            name: '',
            price: 0,
            imgUrl: '',
            edit: false
        }
    }

    cancel = (event) => {
        event.preventDefault()

        this.clearInput()
    }

    add = (event) => {
        event.preventDefault()

        if (!this.state.imgUrl) this.setState({ imgUrl: this.defaultImg })

        let { name, price, imgUrl } = this.state

        let body = {
            name,
            price,
            imgUrl
        }

        if (this.state.edit) {
            axios.put(`/api/product/${this.state.currentEdit}`, body)
            .then( response => {
                this.props.get()
            })
            .catch( error => {
                console.log(error)
            })
        }
        else {
            axios.post('/api/product', body)
            .then( response => {
                this.props.get()
            })
            .catch( error => {
                console.log(error)
            })
        }

        this.clearInput()
        this.props.get()
    }

    clearInput = () => {

        this.setState({
            name: '',
            price: 0,
            imgUrl: '',
            edit: false
        })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentEdit !== this.props.currentEdit) {

            if (this.props.currentEdit === null) {
                this.setState({
                    currentEdit: null,
                    edit: false,
                    name: '',
                    price: '',
                    imgUrl: ''
                })
            }
            else {
                axios.get(`/api/product/${this.props.currentEdit}`).then( response => {
                    this.setState({ ...response.data[0], currentEdit: response.data[0].id, edit:true })
                })
                .catch( error => {
                    console.log(error)
                })
            }
        }
    }

    render() {

        return (
            <div className="form">
                <img src={ this.state.imgUrl ? `${this.state.imgUrl}` : this.defaultImg } alt={ this.state.name } />
                <label>Image URL:</label>
                <input type="text" value={ this.state.imgUrl } onChange={ event => { this.setState({ imgUrl: event.target.value }) } } />
                <label>Product Name:</label>
                <input type="text" value={ this.state.name } onChange={ event => { this.setState({ name: event.target.value }) } } />
                <label>Price:</label>
                <input type="text" value={ this.state.price } onChange={ event => { this.setState({ price: event.target.value }) } } />                
                <div>
                    <button onClick={ this.cancel }>Cancel</button>
                    <button onClick={ this.add }>{ this.state.edit? 'Save Changes' : 'Add to Inventory' }</button>
                </div>
            </div>
        )
    }
}
