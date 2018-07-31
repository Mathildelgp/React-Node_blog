import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddArticle from './components/AddArticle'
import ArticleList from './components/ArticlesList'
import Signup from './components/Signup'
import Menu from './components/Menu'
import OneArticle from './components/OneArticle'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/articles' component={ArticleList} />
            <Route path='/users/signup' component={Signup} />
            <Route path='/articles/add' component={AddArticle} />
            <Route path='/articles/:id' component={OneArticle} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
