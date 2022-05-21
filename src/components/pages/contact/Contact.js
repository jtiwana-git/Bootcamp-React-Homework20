import React from 'react';
import './contact.css';
import useContact from './useContact';
import validate from './validateinfo';

export default function Contact({submitForm}) {
const {handleChange, values, handleSubmit, errors } = useContact(validate)


  return (
    <section id='contact'>
     <h1 className='contactH1'>Contact Me</h1>
      <div className='container contact__container'>
      <form className='form' onSubmit={handleSubmit}>
      
      <input type='text' id='name' name='name' placeholder='Name' value={values.name} onChange={handleChange} />
      {errors.name && <p className='errMessage'>{errors.name}</p>}
      <input type='email' id='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} /> {errors.email && <p className='errMessage'>{errors.email}</p> }
      <textarea type='text' name='message' id='message' rows='7' placeholder='Your Message' value={values.message} onChange={handleChange}></textarea>
       {errors.message && <p className='errMessage'>{errors.message}</p> }
      <button type='submit' className='btn btn-primary'>Send Message</button>
      <div className='success__container'>
              </div>

      </form>

    </div>


    </section>
  );
}
