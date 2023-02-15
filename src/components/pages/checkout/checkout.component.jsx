import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCardItems  , selectCardTotal} from '../../../redux/card/card.selectors'
import CheckoutItem from '../../checkout-item/checkout-item.component'

const CheckoutPage = ({ cardItems , total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cardItems.map(cardItem => <CheckoutItem key={cardItem.id} cardItem={cardItem} />)
        }
        <div className='total'>
            <span className='item-total'>Total : ${total}</span>
            <button className='payment-button' value={total}>Payment</button>
        </div>
    </div> 
)

const mapStateToProps = createStructuredSelector({
    cardItems : selectCardItems,
    total : selectCardTotal
})

export default connect(mapStateToProps)(CheckoutPage)