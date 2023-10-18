const initialState = {
  userData: null,
  signInError: null,
  signUpError: null
};

export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'userData/signIn': {
      return state;
    }
    case 'userData/signInFailure': {
      console.log(action.payload);
      return {
        ...state,
        signInError: action.payload
      };
    }
    case 'userData/signUp': {
      return state;
    }
    case 'userData/signUpFailure': {
      return {
        ...state,
        signUpError: action.payload
      };
    }
    case 'userData/getUser': {
      return {
        userData: action.payload,
        signInError: null,
        signUpError: null
      };
    }
    case 'userData/deleteUser': {
      return {
        userData: null,
        signInError: null,
        signUpError: null
      };
    }

    default:
      return state;
  }
}
