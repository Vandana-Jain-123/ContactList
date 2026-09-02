import React from "react";
import "./contactList.css";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
const ContactList = ({ allData, deleteData ,selectData}) => {
  const navigate = useNavigate();
  console.log(allData, "imgs");




  return (
    <>
      <div className="container">
        <div className="designeTable">
          <h4>Contact List</h4>
          <h4>Add Contact</h4>
          <h4>Favorite</h4>
          <h4>Category</h4>
        </div>

        <div className="body">
          {/* header */}
          <div className="header">
            <h1> = </h1>
            <h1>Contact List</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Add Contact
            </button>
          </div>

          {/* serach section and select data */}
          <div className="searchBar">
            <input type="tedxt" placeholder="serach contact...." />
            <select>
              <option>Family</option>
              <option>Office</option>
              <option>Friend</option>
              <option>Bussines</option>
            </select>
            <select>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>

          {/* all contact in table form */}

          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>image</th>
                  <th>name</th>
                  <th>mobile </th>
                  <th>Address</th>
                  <th>category</th>
                  <th>Favorite</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((contact, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={URL.createObjectURL(contact.image)}
                        alt={contact.name}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.address}</td>
                    <td>{contact.category}</td>
                    <td>{contact.isFavorite}</td>
                    <td>
                      <button
                     onClick={() => selectData(contact.id)}

                     
 >
                        <FaEdit />
                      </button>

                      <button onClick={() => deleteData(contact.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
