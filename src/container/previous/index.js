import { PreviousShifts } from '../../scenes';
import { connect } from 'react-redux';
import * as actions from '../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    currentView: state.views
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterPreviousShifts: () => dispatch(actions.enterPreviousShifts()),
    leavePreviousShifts: () => dispatch(actions.leavePreviousShifts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviousShifts);
