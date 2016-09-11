import { TodayShifts } from '../../scenes';
import { connect } from 'react-redux';
import * as actions from '../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    currentView: state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterTodayShifts: () => dispatch(actions.enterTodayShifts()),
    leaveTodayShifts: () => dispatch(actions.leaveTodayShifts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayShifts);
