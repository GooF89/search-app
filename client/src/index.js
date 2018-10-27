import React from 'react';
import ReactDOM from 'react-dom';
import AppNavbar from './components/AppNavbar';
import App from './App';
import Content from './components/Content';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";

const app =  document.getElementById('root');
ReactDOM.render(
  <Router>
    <div>
      <AppNavbar />
      <Route exact path="/" component={App} />
      <Route path="/contents/:id" component={Content} />
    </div>
  </Router>,
app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
