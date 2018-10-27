import React, { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import { Container, Button , Input, InputGroup, InputGroupAddon} from "reactstrap";
import { addItem } from '../actions/ItemActions';
import { connect } from 'react-redux';
import MSButton from "./MostSearchedButton";

class SearchBar extends Component {

  state = {
    name: ''
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onClick = () => {
    if (this.state.name !== '') {
      this.props.addItem(this.state.name);
      this.setState({ name: '' });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  render() {
    return (
      <Container style={{maxWidth: '98%', width: 700, marginBottom: '2%'}}>
        <InputGroup >
          <Input style={{border: 'solid'}} type="text" name="name"
                 placeholder="Search for content within the iTunes Store"
                 onKeyPress={this.handleKeyPress} onChange={this.onChange}
                 value={this.state.name} />
          <InputGroupAddon addonType="append">
            <Button color="dark" onClick={this.onClick}>
              <span style={{marginRight: '10%'}}>Find</span>
              <FaSearch />
            </Button>
          </InputGroupAddon>
          <MSButton />
        </InputGroup>
      </Container>
    )
  }
}

export default connect(
  (s) => ({}),
  {addItem}
)(SearchBar);
