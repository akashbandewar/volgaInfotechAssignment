import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Details.css'

const Details = ({ data }) => {
  const { id } = useParams();
  const record = data.find(record => record.id === parseInt(id));
  const navigate = useNavigate();
  if (!record) 
    return (
        <div className='error-message'>
            <h1>Record not found</h1>
            <button className='home-button' onClick={() => navigate('/')}>Home</button>
        </div>
    );

  return (
    <div className='details-container'>
      <h2>Details</h2>
      <table className='details-table'>
        <tr>
            <th>Name:</th>
            <td>{record.name}</td>
        </tr>
        <tr>
            <th>Email:</th>
            <td>{record.email}</td>
        </tr>
        <tr>
            <th>Phone:</th>
            <td>{record.phone}</td>
        </tr>
        <tr>
            <th>Address:</th>
            <td>{record.address}</td>
        </tr>
      </table>
      <button className='home-button' onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default Details;
