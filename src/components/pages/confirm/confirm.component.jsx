import React, { useRef, useState } from 'react';
import FormInput from '../../form-input/form-input.component';
import '../checkout/checkout.styles.scss'
import emailjs from '@emailjs/browser'


export default function ConfirmPage({total, cardItems}){
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
        emailjs.sendForm('service_wh1tko1', 'template_qhcbm0y', form1.current, 'ZmTSurbMfBR4GpUVC').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
        <button className='payment-button' value={total}>Confirm</button>
    </form>
        }
        </>
    )
}