import React from 'react';
import './card-item.styles.scss'

const CardItem = ({item : {imageUrl , price , name , quantity}}) => (
    <div className='card-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='name'>{price}*{quantity}</span>
        </div>
    </div>
)

export default CardItem