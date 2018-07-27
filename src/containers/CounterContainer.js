import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
};

