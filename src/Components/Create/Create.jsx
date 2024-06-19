import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ addRecord }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord({ name, email, phone, address });
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
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
            onChange={(e) => setPhone(e.target.value)} 
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
