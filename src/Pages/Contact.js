import React from 'react'
import ContactForm from '../Components/ContactForm'
import SocialMedia from '../Components/SocialMedia'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-page-heading">Let's Talk</h1>
            <ContactForm />
            <SocialMedia />
        </div>
    )
}

export default Contact
