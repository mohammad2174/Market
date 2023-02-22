import React from 'react';
import './card-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CardItem from '../card-item/card-item.component'
import { connect } from 'react-redux'
import { selectCardItems, selectCurrentUser } from '../../redux/card/card.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCardHidden } from '../../redux/card/card.action'

const CardDropDown = ({cardItems , history , dispatch, user}) => {
    return (
        <div className='card-dropdown'>
           <div className='card-items'>
               {
                   cardItems.length ? 
                   cardItems.map(cardItem => (
                    <CardItem key={cardItem.id} item={cardItem} />
                 )) : <span className='empty-message'>Your card is Empty</span>
               }

           </div>
            {cardItems.length && user ? <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCardHidden());}}>Go To Checkout</CustomButton> : <CustomButton onClick={() => {history.push('/signin'); dispatch(toggleCardHidden());}}>Go to sign in or sing up</CustomButton>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cardItems : selectCardItems,
    user : selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(CardDropDown))