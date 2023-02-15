import React from 'react';
import './collections-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-Preview/collection-preview.component';
import { selectCollcetionsForPreview } from '../../redux/shop/shop-selectors'

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
                {
                    collections.map(({id , ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollcetionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)