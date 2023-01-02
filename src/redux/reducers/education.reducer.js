const education = (state = [], action) => {
  switch (action.type) {
    case 'SET_EDUCATION':
      return action.payload;
    default:
      return state;
  }
}

export default education;