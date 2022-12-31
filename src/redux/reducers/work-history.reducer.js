const workHistory = (state = [], action) => {
  switch(action.type) {
    case 'SET_WORK_HISTORY':
      return action.payload;
    default:
      return state;
  }
}

export default workHistory;