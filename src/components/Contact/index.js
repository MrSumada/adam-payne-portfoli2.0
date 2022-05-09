import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name is missing.')
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if (!message) {
            setErrorMessage(
            `No message written.`
            );
            return;
        }

        setName('');
        setMessage('');
        setEmail('');
        alert(`Thank you ${name}!`);
        setErrorMessage('');
    };

    return (
    <div>
        {/* <p>Hello {name}</p> */}
        <form className="contact">
            <h4>Name</h4>
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
            />
            <h4>Email</h4>
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <h4>Message</h4>
            <textarea
                value={message}
                name="message"
                type="text"
                placeholder='message'
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleFormSubmit}>
            Submit
            </button>

            {errorMessage && (
            <div className='error-message'>
            <p className="error-text">{errorMessage}</p>
            </div>
        )}
        </form>
        
        </div>
    );
}

export default Contact;
