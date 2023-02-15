import './shop.styles.scss'
import { Route } from 'react-router-dom'
// import CollectionOverview from '../../collections-overview/collections-overview.component'
import React from 'react'
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../../redux/shop/shop.actions'
import collectionOverViewContainer from '../../collections-overview/collection-overview.container'
import collectionPageContainer from '../../pages/collection/collection.container'


class ShopPage extends React.Component {
    componentDidMount(){
        const {fetchCollectionStartAsync} = this.props
        fetchCollectionStartAsync()
    }

    render(){
    const { match } = this.props

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={collectionOverViewContainer} />
                <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
            </div>
        )   
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage)