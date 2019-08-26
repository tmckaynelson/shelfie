import React from 'react'
import axios from 'axios'
import { HashRouter, Route, Switch } from 'react-router-dom'

// components
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

// Stylesheet
import 'reset-css'
import './App.css';

class App extends React.Component {

  render() {

    return (
      <HashRouter>
        <div className="app">
          <Header />
          <div className="container">
            {/* <Dashboard products={ this.state.inventory } get={ this.getAll } setEdit={ this.setEdit } /> */}
            {/* <Form get={ this.getAll } currentEdit={ this.state.currentEdit } /> */}
            <Switch>
              <Route exact path='/' component={ Dashboard } />
              <Route path='/add' component={ Form } />
              <Route path='/edit/:id' component={ Form } />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
