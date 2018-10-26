import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, ListGroup,  } from 'reactstrap';
import { addItem } from '../actions/ItemActions';
import SearchItem from "./SearchItem";


class MSList extends Component {

  render() {
    const show = this.props.show;
    const searchItems = this.props.searchItems;
    return (
      <Container style={{width: '45%'}}>
        { show &&
        <Container >
          <h3 style={{marginBottom: '5%', marginLeft: '25%'}}>Most Searched List</h3>
          <ListGroup>
            {searchItems.map((item) =>{
              return (
                <SearchItem key={item._id} item={item}/>
              )
            })}
          </ListGroup>
        </Container>}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  searchItems: state.store.searchItems,
  show: state.store.showSearched
});

export default connect(
  mapStateToProps,
  {addItem}
)(MSList);
