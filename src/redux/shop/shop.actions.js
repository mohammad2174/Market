/* eslint-disable no-undef */
import shopActionType from './shop.types'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
// import { convertPhpToMap } from '../../firebase/firebase.utils'



export const fetchCollectionStart = () => ({
    type : shopActionType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = collectionMap => ({
    type : shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type : shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload : errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
          dispatch(fetchCollectionStart())
        collectionRef.onSnapshot(async snapshot =>{
             const collectionMap =  convertCollectionsSnapshotToMap(snapshot)
             updateCollections(collectionMap)
             this.setState({loading: false})
        })

        // fetch('http://localhost/reactMarketPhp/getData.php')
        //     .then(res => {
        //         return res.json();
        //     })
        // .then(data => {
        //     const collectionMap = convertPhpToMap(data)
        //     dispatch(fetchCollectionSuccess(collectionMap))
        // }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}