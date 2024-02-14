import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onsubmit = () =>{
        alert(`Your Enter name: ${name}\nYou Enter Email: ${email}\nYou Enter Phone: ${phone}`)
        setEmail('')
        setName('')
        setPhone('')
    }
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact">
        <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
      <button onClick={onsubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
