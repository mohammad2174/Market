import React from 'react';
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCard , addItem , removeItem } from '../../redux/card/card.action'

const CheckoutItem = ({cardItem , cleareItem , addItem , removeItem}) => {
    const { name , imageUrl , price , quantity } = cardItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cardItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cardItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => cleareItem(cardItem)}>&#10007;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cleareItem : item => dispatch(clearItemFromCard(item)) ,
    removeItem : item => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CheckoutItem)