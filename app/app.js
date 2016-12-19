import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='contato' component={Contato}>
            <IndexRoute component={Localizacao} />
            <Route path='filiais' component={Filiais} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1>Página Inicial</h1>
const Contato = (props) => (
  <div>
    <Link to ='/contato'>Localização</Link>&nbsp;
    <Link to ='/contato/filiais'>Filiais</Link>
    <h1>Contato</h1>
    {props.children}
  </div>
)
const NotFound = () => (<h1>Erro 404 - A página não foi encontrada!</h1>)

const Localizacao = () => (<h3>Localização</h3>)
const Filiais = () => (<h3>Filiais</h3>)

const Container = (props) => (
  <div>
    <Menu />
    {props.children}
  </div>
)

const Menu = () => (
  <div>
    <Link to='/'>Página Inicial</Link>&nbsp;
    <Link to='/contato'>Contato</Link>
  </div>
)

export default App