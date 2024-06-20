import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = ({ data, deleteRecord }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete= (id) => {
    setShowModal(true);
    setId(id);
  }

  const deleteConfirmation = () => {
    deleteRecord(id);
    setShowModal(false);
  }

  const filteredData = data.filter((record) => record.email.includes(search));

  return (
    <div>
      {showModal && (<div className="modal-overlay">
        <div className="modal">
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this entry?</p>
          <button className="modal-button" onClick={deleteConfirmation}>Yes</button>
          <button className="modal-button" onClick={() => setShowModal(false)}>No</button>
        </div>
      </div>)}
      <div className="search-row">
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
      {filteredData.length !== 0 && (
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
            {filteredData.map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>
                  <span
                    className="action"
                    onClick={() => handleDelete(record.id)}
                        // () => deleteRecord(record.id)}
                  >
                    DELETE
                  </span>
                </td>
                <td>
                  <Link className="link action" to={`/details/${record.id}`}>
                    <span>Details</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {filteredData.length === 0 && <h1>NO MATCHING RESULT FOUND!!!</h1>}
    </div>
  );
};

export default Table;
