import shopActionType from './shop.types'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessag : undefined
}

const shopReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case shopActionType.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching: true
            }
        case shopActionType.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections : action.payload
            }
        case shopActionType.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessag : action.payload
            }
        default:
           return state;
    }
}

export default shopReducer