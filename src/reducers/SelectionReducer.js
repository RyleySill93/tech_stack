export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      console.log(action.libraryId);
      return action.libraryId;
    default:
      console.log('default: ', state);
      return state;
  }
};
