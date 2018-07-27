import { connect } from 'react-redux';
import Counter from '../components/Counter';

import {
  actionIncrement,
  actionDecrement
} from '../actions';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(actionIncrement())
    },
    decrement: () => {
      dispatch(actionDecrement())
    }
  }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);
const connectedCounter = componentConnector(Counter);

export default connectedCounter;

