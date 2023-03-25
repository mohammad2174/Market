import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCardItems  , selectCardTotal, selectCurrentUser} from '../../../redux/card/card.selectors'
import CheckoutItem from '../../checkout-item/checkout-item.component'
import Confirm from '../confirm/confirm.component'


const CheckoutPage = ({ cardItems , total, user, history }) => (
    <>
    {user && cardItems.length ?
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
      cardItems.length ? cardItems.map(cardItem => <CheckoutItem key={cardItem.id} cardItem={cardItem} />) : <span>Your Checkout is empty</span>
    }
    <Confirm total={total} cardItems={cardItems} user={user} />
    </div>
    :
    <div className='checkout-page'>
        <a href={history.push('/signin')}>Go to Sign in</a>
    </div>
    }
     </>
)


const mapStateToProps = createStructuredSelector({
    cardItems : selectCardItems,
    total : selectCardTotal,
    user : selectCurrentUser
})


export default connect(mapStateToProps)(CheckoutPage)