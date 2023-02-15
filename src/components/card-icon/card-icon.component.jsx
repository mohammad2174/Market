import React from 'react';
import './card-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import {toggleCardHidden} from '../../redux/card/card.action';
import { selectCardItemsCount } from '../../redux/card/card.selectors'
import { createStructuredSelector } from 'reselect'

const CardIcon = ({ toggleCardHidden , itemCount }) => {
    return (
        <div className='card-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCardHidden : () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCardItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon)