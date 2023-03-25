import React, { useRef, useState } from 'react';
import FormInput from '../../form-input/form-input.component';
import '../checkout/checkout.styles.scss'
import { clearItemFromCard } from '../../../redux/card/card.action'
import { connect } from 'react-redux'
// import emailjs from '@emailjs/browser'
import axios from 'axios';


const ConfirmPage = ({total, cardItems, user, cleareItem}) => {
    const form1 = useRef();

    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
          ...form,
          [field]: e.target.value,
        };
        setForm(nextFormState);
      };
    const [form, setForm] = useState({
        name: "",
        email: "",
        phonenumber: "",
        city: "",
        address: "",
        postcode: ""
      });
    const onSubmitForm = e => {
        e.preventDefault();
        // emailjs.sendForm('service_wh1tko1', 'template_qhcbm0y', form1.current, 'ZmTSurbMfBR4GpUVC').then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        axios.post(`http://localhost/reactMarketPhp/insertConfirm.php?name=${form.name}&id_cat=${cardItems.map(cardItem => cardItem.id).join(',')}&id_user=${user.currentUser.id}&total=${total}&quantity=${cardItems.map(cardItem => cardItem.quantity).join(',')}&email=${form.email}&phonenumber=${form.phonenumber}&city=${form.city}&address=${form.address}&postcode=${form.postcode}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err))
      };
    console.log(form1.current);
    return (
        <>
        {cardItems.length === 0 ? null :
        <form ref={form1} onSubmit={onSubmitForm} className='total'>
        <span className='item-total'>Total : ${total}</span>
        <FormInput onChange={onUpdateField} label='name' name='name' type='name' value={form.name} required />
        <FormInput onChange={onUpdateField} label='email' name='email' type='email' value={form.email} required />
        <FormInput onChange={onUpdateField} label='phone number' name='phonenumber' value={form.phonenumber} required />
        <FormInput onChange={onUpdateField} label='city' name='city' type='city' value={form.city} required />
        <FormInput onChange={onUpdateField} label='address' name='address' type='text' value={form.address} required />
        <FormInput onChange={onUpdateField} label='post code' name='postcode' value={form.postcode} required />
        {
        cardItems.map(cardItem => <div className='hide' key={cardItem.id} cardItem={cardItem}>
            <FormInput onChange={onUpdateField} value={cardItem.id} />
            <FormInput onChange={onUpdateField} value={cardItem.id_cat} />
            <FormInput onChange={onUpdateField} value={cardItem.imageUrl} />
            <FormInput onChange={onUpdateField} value={cardItem.name} />
            <FormInput onChange={onUpdateField} value={cardItem.price} />
            <FormInput onChange={onUpdateField} value={cardItem.quantity} />
        </div>)
        }
        <button className='payment-button' onClick={() => cleareItem(cardItems[0]) && cleareItem(cardItems[1]) && cleareItem(cardItems[2]) && cleareItem(cardItems[3]) && cleareItem(cardItems[4]) && cleareItem(cardItems[5]) && cleareItem(cardItems[6]) && cleareItem(cardItems[7]) && cleareItem(cardItems[8]) && cleareItem(cardItems[9]) && cleareItem(cardItems[10])}>Confirm</button>
    </form>
        }
        </>
    )
}

const mapDispatchToProps = dispatch => ({
  cleareItem : item => dispatch(clearItemFromCard(item))
})

export default connect(null , mapDispatchToProps)(ConfirmPage)