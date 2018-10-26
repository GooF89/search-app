import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, ListGroup,  } from 'reactstrap';
import ResultItem from "./ResultItem";

class ResultList extends Component {

  render() {
    const show = this.props.show;
    const resultItems = this.props.resultItems;
    const lastSearch = this.props.lastSearch;
    return (
      <Container style={{maxWidth: '98%', width: 700}}>
        { show &&
        <Container >
          <h2 style={{marginBottom: '5%', marginLeft: '16%'}}>
            { resultItems.length ? `Results for "${lastSearch}":` : `No results for "${lastSearch}":`}
          </h2>
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
  show: state.store.showResults,
  lastSearch: state.store.lastSearch
});

export default connect(
  mapStateToProps,
  {}
)(ResultList);
