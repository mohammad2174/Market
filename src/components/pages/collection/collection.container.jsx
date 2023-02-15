import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../../redux/shop/shop-selectors'
import WithSpinner from '../../with-sppiner/with-sppiner.component'
import CollectionPage from './collection.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector ({
    isLoading : (state) =>  !selectIsCollectionLoaded(state)
})

const collectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default collectionPageContainer