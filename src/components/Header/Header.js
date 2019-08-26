import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>SHELFIE</h1>
                <NavLink exact to='/'  >Dashboard</NavLink>
                <NavLink to='/add' >Add Inventory</NavLink>
            </header>
        )
    }
}
