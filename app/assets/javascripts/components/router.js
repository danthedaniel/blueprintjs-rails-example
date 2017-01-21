import React from 'react';
import {Router, Route, browserHistory, Redirect} from 'react-router';

import App from './app';
import HomePage from './homepage';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={HomePage} />
        </Route>
      </Router>
    );
  }
};
