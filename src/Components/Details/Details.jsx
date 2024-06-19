import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Details = ({ data }) => {
  const { id } = useParams();
  const record = data.find(record => record.id === parseInt(id));
  const navigate = useNavigate();
  if (!record) return <div>Record not found</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Details</h2>
      <p><strong>Name:</strong> {record.name}</p>
      <p><strong>Email:</strong> {record.email}</p>
      <p><strong>Phone:</strong> {record.phone}</p>
      <p><strong>Address:</strong> {record.address}</p>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default Details;
