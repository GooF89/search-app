import React, { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import { Button , Input, InputGroup} from "reactstrap";
import { addItem } from '../actions/ItemActions';
import { connect } from 'react-redux';

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
      <InputGroup>
        <Input type="text" name="name" placeholder="Search..." onKeyPress={this.handleKeyPress} onChange={this.onChange} value={this.state.name} />
        <Button color="dark" onClick={this.onClick}>
          <FaSearch />
        </Button>
      </InputGroup>
    )
  }
}

export default connect(
  (s) => ({}),
  {addItem}
)(SearchBar);
