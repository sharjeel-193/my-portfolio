import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import './ContactForm.css'
import Zoom from 'react-reveal'
function ContactForm() {

    const [isActive, setISActive] = useState(false)

    

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('sharjeel-193', 'portfolio-1.0', e.target, 'user_jq9mjOZU55xE8rXwNPM0g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    

    return (
        <div className="contact-form">
            <Zoom top duration={2000}>
            <form onSubmit={sendEmail}>
                <div className="field-wrapper">
                    <label for="name" className="label-field">Name</label>
                    <input type="text" name="name" className="input-field" required/>
                </div>
                <div className="field-wrapper">
                    <label for="email" className="label-field">Email</label>
                    <input type="email" name="email" className="input-field" required/>
                </div>
                <div className="field-wrapper">
                    <label for="subject" className="label-field">Subject</label>
                    <input type="text" name="subject" className="input-field" />
                </div>
                <div className="field-wrapper-textarea">
                    <label for="name" className="label-field" required>Message</label>
                    {/* <input type="text" name="name" className="input-field"/> */}
                    <textarea name="message" className="input-field-textarea" rows="10"></textarea>
                </div>
                <div className="field-wrapper">
                    <input type="submit" value="Send Message" className="contact-form-btn" />
                </div>
                
            </form>
            </Zoom>
        </div>
    )
}

export default ContactForm
