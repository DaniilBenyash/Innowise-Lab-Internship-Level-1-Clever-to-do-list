const initialState = {
    isLoading: 'idle',
    error: null,
}

export default function signInReducer(state = initialState, action) {
    switch (action.type) {
        case 'signIn/signIn': {
            return {
                ...state,
                isLoading: 'pending',
            }
        }
        case 'signIn/signInSuccess': {
            if(state.isLoading === 'pending'){
                return {
                    isLoading: 'idle',
                    error: null
                }
            }
            break
        }
        case 'signIn/signInFailure': {
            return {
                ...state,
                isLoading: 'idle',
                error: action.payload
            }
        }
        default:

        return state
    }
  }