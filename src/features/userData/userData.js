const initialState = {
  userData: null
};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'userData/getUser': {
      return {
        userData: action.payload
      };
    }
    case 'userData/deleteUser': {
      return {
        userData: null
      };
    }

    default:
      return state;
  }
}
