import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  Media
} from 'reactstrap';


class ResultItem extends Component {
  render() {

    const item = this.props.item;
    return (
      <ListGroupItem tag="a" href={item.trackViewUrl} color="secondary" >
        <Media>
          <Media left middle>
            <img src={item.artworkUrl60} width="30" height="30"/>
          </Media>
          <Media body>
            <Media heading middle center>
              {item.trackName}
            </Media>
           </Media>
        </Media>
      </ListGroupItem>
    )
  }
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ResultItem;