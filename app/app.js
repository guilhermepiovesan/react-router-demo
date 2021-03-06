import React, { Component } from 'react'
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router'

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
          <Route path='contato' component={Contato}>
            <IndexRoute component={Localizacao} />
            <Route path='filiais' component={Filiais} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='sobre(/:name)' component={Sobre} />
          <Route path='namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
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
    <Link to ='/contato' onlyActiveOnIndex activeStyle={{color:'red'}}>Localização</Link>&nbsp;
    <Link to ='/contato/filiais' activeStyle={{color:'red'}}>Filiais</Link>&nbsp;
    <Link activeClassName='active' to={{ pathname: '/contato/query', query: { message: 'Hello from Route Query' } }}>Route Query</Link>
    <h1>Contato</h1>
    {props.children}
  </div>
)
const Sobre = (props) => (
  <div>
    <h1>Sobre nós</h1>
    <Link to ='/sobre/Guilherme' onlyActiveOnIndex activeStyle={{color:'red'}}>Guilherme</Link>
    { props.params.name && <h2>Seja bem vindo, {props.params.name}</h2>}
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
    <IndexLink to='/' activeClassName='active'>Página Inicial</IndexLink>&nbsp;
    <IndexLink to='/contato' activeClassName='active'>Contato</IndexLink>&nbsp;
    <IndexLink to='/sobre' activeClassName='active'>Sobre</IndexLink>&nbsp;
    <IndexLink to='/namedComponent' activeClassName='active'>Named Components</IndexLink>
  </div>
)

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

export default App