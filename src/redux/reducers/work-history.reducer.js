const workHistory = (state = [], action) => {
  switch(action.type) {
    case 'SET_WORK_HISTORY':
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default workHistory;