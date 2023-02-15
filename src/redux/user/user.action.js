import { UserActionType } from './user.types';
export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})

export const deleteCurrentUser = user => ({
    type: UserActionType.DELETE_CURRENT_USER,
    payload: user
})