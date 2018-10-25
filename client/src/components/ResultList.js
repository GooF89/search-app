import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, ListGroup,  } from 'reactstrap';
import ResultItem from "./ResultItem";

class ResultList extends Component {

  render() {
    const show = this.props.show;
    const resultItems = this.props.resultItems;
    return (
      <Container style={{width: 500}}>
        { show &&
        <Container >
          <ListGroup>
            {resultItems.map((item) =>{
              return (
                <ResultItem key={item.trackId} item={item}/>
              )
            })}
          </ListGroup>
        </Container>}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  resultItems: state.store.resultItems,
  show: state.store.showResults
});

export default connect(
  mapStateToProps,
  {}
)(ResultList);
