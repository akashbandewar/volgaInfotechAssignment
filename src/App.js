import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './Components/Table/Table';
import Create from './Components/Create/Create';
import Details from './Components/Details/Details';
import './App.css'

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'James', email: 'james@gmail.com', phone: '8483453234', address: 'Pune' },
    { id: 2, name: 'Clara', email: 'clara@gmail.com', phone: '9983423854', address: 'Thane' },
    { id: 3, name: 'Wayne', email: 'wayne@gmail.com', phone: '4348273323', address: 'Airoli' },
    { id: 4, name: 'Maya', email: 'maya@gmail.com', phone: '9920558566', address: 'Dadar' },
  ]);

  const addRecord = (record) => {
    setData([...data, { ...record, id: data.length + 1 }]);
  };

  const deleteRecord = (id) => {
    setData(data.filter(record => record.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Table data={data} deleteRecord={deleteRecord} />} />
          <Route path="/create" element={<Create addRecord={addRecord} />} />
          <Route path="/details/:id" element={<Details data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

