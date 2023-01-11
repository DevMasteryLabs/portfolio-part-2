import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';



const contactInformations = {
  email: 'jane@gmail.com',
  phone: '+216 50 123 456',
  address: {
    street: 'Avenue de Cathage',
    city: 'Sfax',
    postalCode: '3027',
    country: 'Tunisia' 
  }
}

function Contact() {
  return (
    <div>
      <div>
        <AiOutlineMail size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.email}</span>
      </div>
      <div className='mt-3'>
        <BsFillPhoneFill size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.phone}</span>
      </div>
      <div className='mt-3'>
        <FaMapMarkerAlt size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.address.street}, {contactInformations.address.city}, {contactInformations.address.postalCode}, {contactInformations.address.country} </span>
      </div>
    </div>
  )
}

export default Contact