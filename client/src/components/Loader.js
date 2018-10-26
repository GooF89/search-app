import React, {Component} from 'react';
import {
  BounceLoader,
  CircleLoader,
  HashLoader,
  RingLoader
} from 'react-spinners';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

const loaders = [BounceLoader, CircleLoader, HashLoader, RingLoader];

class Loader extends Component {
  render() {
    const Loader = loaders[Math.floor(Math.random() * 4)];
    return (
      <Container style={{width: 250}}>
        <Loader
          sizeUnit={"px"}
          size={200}
          color={'#6e00bc'}
          loading={this.props.loading}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.store.loading
});

export default connect(
  mapStateToProps,
  {}
)(Loader);
