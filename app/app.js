import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/contato' component={Contato} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

const Home = () => <h1>Página Inicial</h1>
const Contato = () => <h1>Contato</h1>
const NotFound = () => (<h1>Erro 404 - A página não foi encontrada!</h1>)

export default App