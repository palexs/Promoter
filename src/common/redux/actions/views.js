export const ENTER_TODAY_SHIFTS_VIEW = 'ENTER_TODAY_SHIFTS_VIEW';
export const LEAVE_TODAY_SHIFTS_VIEW = 'LEAVE_TODAY_SHIFTS_VIEW';
export const ENTER_PREVIOUS_SHIFTS_VIEW = 'ENTER_PREVIOUS_SHIFTS_VIEW';
export const LEAVE_PREVIOUS_SHIFTS_VIEW = 'LEAVE_PREVIOUS_SHIFTS_VIEW';

export const enterTodayShifts = () => {
  return {
    type: ENTER_TODAY_SHIFTS_VIEW,
    currentView: 'todayShifts',
  };
};

export const leaveTodayShifts = () => {
  return {
    type: LEAVE_TODAY_SHIFTS_VIEW,
    currentView: 'todayShifts',
  };
};

export const enterPreviousShifts = () => {
  return {
    type: ENTER_PREVIOUS_SHIFTS_VIEW,
    currentView: 'previousShifts',
  };
};

export const leavePreviousShifts = () => {
  return {
    type: LEAVE_PREVIOUS_SHIFTS_VIEW,
    currentView:  'previousShifts',
  };
};
