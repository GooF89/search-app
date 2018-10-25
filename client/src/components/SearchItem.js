import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import {addItem} from "../actions/ItemActions";


class SearchItem extends Component {

  onClick = () => {
    this.props.addItem(this.props.item.name);
  };

  render() {
    const width = 240;
    const item = this.props.item;
    return (
      <ListGroupItem action color="dark" style={{width: width, position: "relative"}} onClick={this.onClick}>
        <div style={{maxWidth: width - 30}}> {item.name} </div>
        <span style={{position: "absolute", right: 5, top: 12}}>
          <Badge color="secondary">{item.counter}</Badge>
        </span>
      </ListGroupItem>
    )
  }
}

SearchItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect(
  (s) => ({}),
  {addItem}
)(SearchItem);

