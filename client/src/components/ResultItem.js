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
      <ListGroupItem tag="a" href={"/contents/" + item.trackId} color="secondary"  >
        <Media>
          <Media left>
            <Media src={item.artworkUrl60} alt={item.trackName} />
          </Media>
          <Media body style={{marginLeft: '5%'}}>
            <Media heading >
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