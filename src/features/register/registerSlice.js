const initialState = {
    userInfo: null,
    isLoading: 'idle',
    error: null,
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case 'register/register': {
            return {
                ...state,
                isLoading: 'pending',
            }
        }
        case 'register/registerSuccess': {
            if(state.isLoading === 'pending'){
                return {
                    userInfo: action.payload,
                    isLoading: 'idle',
                    error: null
                }
            }
            break
        }
        case 'register/registerFailure': {
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