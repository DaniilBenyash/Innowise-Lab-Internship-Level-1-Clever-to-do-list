const initialState = {
    isLoading: 'idle',
    error: null,
}

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case 'signUp/signUp': {
            return {
                ...state,
                isLoading: 'pending',
            }
        }
        case 'signUp/signUpSuccess': {
            if(state.isLoading === 'pending'){
                return {
                    isLoading: 'idle',
                    error: null
                }
            }
            break
        }
        case 'signUp/signUpFailure': {
            if(state.isLoading === 'pending'){
                return {
                    ...state,
                    isLoading: 'idle',
                    error: action.payload
                }
            }
            return state
        }
        default:

        return state
    }
  }