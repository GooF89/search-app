import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import './App.css';

import Loader from "./components/Loader";
import ResultList from './components/ResultList';
import MSList from './components/MostSearchedList';
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div>
          <Container>
            <SearchBar />
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