import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import './App.css';

import Loader from "./components/Loader";
import AppNavbar from './components/AppNavbar';
import ResultList from './components/ResultList';
import MSList from './components/MostSearchedList';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div>
          <AppNavbar />
          <Container>
            <Loader />
            <ResultList />
            <MSList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;