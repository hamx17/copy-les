import React, { useState } from 'react';
import './Form.css';

import MainButton from './Button';

const inputStyle = {
    width: '100%',
    padding: '10px',
    
    fontSize: '16px',
    border: '0px solid #ccc',
    borderRadius: '29px',
    boxshadow: '0 0 10px rgba(0, 0, 0, 1.3)',
    backgroundColor: '#F0F0F0',
    marginTop: '10px'
    // Add other styles as needed
  };

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
        {type === 'textarea' ? (
        <textarea value={value} onChange={handleChange} style={inputStyle} />
      ) : (
        <input type={type} value={value} onChange={handleChange} style={inputStyle}  />
      )}
      <label className={value && 'filled'}>
        {label}
      </label>
    </div>
  );

  
}

export default function Form() {
  return (
    <div className="container">
   
    
    <div className="Forms">
    <div className="container py-0 py-md-8 ">
        <div className='row d-flex justify-center'>
            <div className='pl-3 pl-sm-0 pt-16 pt-sm-0 '>
                <h3 style={{marginTop:'30px'}}>  Persoonlijke offerte aanvragen</h3>
                <p>  Op zoek naar een landingspagina die converteert? Vul nu het contactformulier in en ontvang binnen één werkdag een persoonlijke offerte die perfect aansluit bij jouw bedrijfsbehoeften</p>
      <form>
        <TextInput label="First name"  />
        <TextInput label="Last name" />
        <TextInput type='email' label="Email" />
        <TextInput type='number' label="number" />
        <TextInput type="textarea" label=" Text Area" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <MainButton className='al' backgroundColor="#00B969" label=" Aanvraag bevestigen -->" color="#F6F6F6" />
    </div>
     
      </form>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}
