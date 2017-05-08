import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, hashHistory, IndexRoute} from 'react-router';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import Main from './components/Main';
import Home from './components/Home';
import SearchBeer from './components/SearchBeer';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home}/>
          <Route path="/buscar" component={SearchBeer}/>
        </Route>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
}

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Main', () => {
    render(Main)
  });
}