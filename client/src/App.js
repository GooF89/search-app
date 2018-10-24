import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div>
          <AppNavbar />
          <Container style={{display: 'flex', justifyContent: 'center'}}>
            <h1>Here will be code!</h1>
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;