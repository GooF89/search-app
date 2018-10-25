import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from 'react-redux';
import {getItems} from "../actions/ItemActions";

class MSButton extends Component {

  onClick = () => {
    this.props.getItems();
  };

  render() {
    return (
      <Button color="dark" onClick={this.onClick}>
        Most Searched
      </Button>
    )
  }
}

export default connect(
  (s) => ({}),
  {getItems}
)(MSButton);
