const initialState = {
  currentView:  'todayShifts',
};

const views = (state = initialState, action) => {
  switch (action.type) {

  case 'ENTER_TODAY_SHIFTS_VIEW':
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return Object.assign({}, state, {
        currentView: action.currentView,
      });
    }
    return state;

  case 'LEAVE_TODAY_SHIFTS_VIEW':
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return Object.assign({}, state, {
        currentView: action.currentView,
      });
    }
    return state;

    case 'ENTER_PREVIOUS_SHIFTS_VIEW':
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return Object.assign({}, state, {
          currentView: action.currentView,
        });
      }
      return state;

    case 'LEAVE_PREVIOUS_SHIFTS_VIEW':
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return Object.assign({}, state, {
          currentView: action.currentView,
        });
      }
      return state;

  default:
    return state;
  }
};


export default views;
