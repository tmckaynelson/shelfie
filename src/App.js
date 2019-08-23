import React from 'react';
import axios from 'axios'

// components
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

// Stylesheet
import 'reset-css'
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    
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

  render() {

    return (
      <div className="app">
        <Header />
        <div className="container">
          <Dashboard products={ this.state.inventory } />
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
