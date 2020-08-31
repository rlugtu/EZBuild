import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BuildsController from './components/BuildsController'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: null,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />

          <Route exact path="/builds/gaming" render={() =>
            <BuildsController currentPage="gaming" />} />

          <Route exact path="/builds/streaming" render={() => <BuildsController currentPage="streaming" />} />

          <Route exact path="/builds/creators" render={() => <BuildsController currentPage="creators" />} />

          <Route exact path="/builds/gaming/:id" render={props => <BuildsController currentPage="single" selectedNiche='gaming' currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />

          <Route exact path="/builds/streaming/:id" render={props => <BuildsController selectedNiche='streaming' currentPage="single" currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />

          <Route exact path="/builds/creators/:id" render={props => <BuildsController currentPage="single" selectedNiche='creators' currentId={props.match.params.id} selectedBuild={props.match.params.id} />} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
