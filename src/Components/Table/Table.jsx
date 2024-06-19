import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Table.css'

const Table = ({ data, deleteRecord }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(record => record.email.includes(search));

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <div className='search-row'>
          <input
            type="text"
            placeholder="Search by Email"
            value={search}
            onChange={handleSearch}
          />
          <Link to="/create">
            <button>CREATE</button>
          </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>
                <span onClick={() => deleteRecord(record.id)}>DELETE</span>
              </td>
              <td>
                <Link to={`/details/${record.id}`}>
                  <span>Details</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
