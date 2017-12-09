'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Routes from './Routes'

render(
  <Provider store={store}>
  <Router>
    <Routes />
    </Router>
    </Provider>,
    document.getElementById('main')
  );

