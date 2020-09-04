import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BuildsController from './components/BuildsController'
import Login from './components/Login';
import Register from './components/Register'
import UserBuilds from './components/UserBuilds'
import Buy from './components/Buy'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: null,
    }
  }

  componentDidMount() {
    fetch('/api/auth/verify', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })

      }).catch(err => console.log(err));
  }

  handleRegisterSubmit = (e, data) => {
    e.preventDefault();
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
          email: res.data.email,
        })
      }).catch(err => console.log(err));
  }

  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} auth={this.state.auth} />
        <div className="container">
          <Route exact path="/" component={Home} />

          {/* AUTH */}
          <Route exact path='/user/login' render={() => (
            this.state.auth
              ? <Redirect to='/user' />
              : <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />
          <Route exact path='/user/Register' render={() => (
            this.state.auth
              ? <Redirect to='/user' />
              : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />
          <Route exact path="/user" render={() => (
            !this.state.auth
              ? <Redirect to="/user/login" />
              : <UserBuilds user={this.state.user} />
          )} />


          {/* SHOP ROUTES */}
          <Route exact path="/builds/gaming" render={() =>
            <BuildsController auth={this.state.auth} currentPage="gaming" />} />

          <Route exact path="/builds/streaming" render={() => <BuildsController auth={this.state.auth} currentPage="streaming" />} />

          <Route exact path="/builds/creators" render={() => <BuildsController auth={this.state.auth} currentPage="creators" />} />

          <Route exact path="/builds/gaming/:id" render={props => <BuildsController auth={this.state.auth} currentPage="single" selectedNiche='gaming' currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />

          <Route exact path="/builds/streaming/:id" render={props => <BuildsController auth={this.state.auth} selectedNiche='streaming' currentPage="single" currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />

          <Route exact path="/builds/creators/:id" render={props => <BuildsController auth={this.state.auth} currentPage="single" selectedNiche='creators' currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />

          <Route exact path="/user/buy" component={Buy} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
