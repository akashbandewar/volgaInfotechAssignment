import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'

const Create = ({ addRecord }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setError('');
    const { value } = e.target;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        setError('Phone number must be exactly 10 digits');
        return;
    }
    addRecord({ name, email, phone, address });
    goHome();
  };

  const goHome = () => {
    navigate('/');
  }

  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Phone" 
            value={phone} 
            onChange={handlePhoneChange} 
            maxLength="10"
            required 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div className='buttons'>
            <button type="submit">Create</button>
            <button onClick={goHome}>Home</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Create;
