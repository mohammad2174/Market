import { UserActionType } from './user.types';
const INITIAL_STATE = {currentUser : null}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            case UserActionType.DELETE_CURRENT_USER:
                return {
                    ...state,
                    currentUser: null
                }
        default:
            return state;
    }
}

export default userReducer