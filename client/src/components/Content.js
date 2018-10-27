import React, {Component} from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Content extends Component {

  state = {
    item: {}
  };

  componentDidMount() {
    const baseUrl = "https://itunes.apple.com/lookup?";
    const id = "id=" + this.props.match.params.id;
    const url = baseUrl + id;
    console.log(url);
    axios.get(url)
      .then(res => {
        this.setState({item: res.data.results[0]});
      });
  }

  render() {
    const item = this.state.item;
    return (
      <Container>
        <h1> Here I am!!! </h1>
      </Container>
    )
  }
}


export default Content;
