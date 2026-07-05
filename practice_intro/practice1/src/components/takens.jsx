import React, { useState } from "react";
export default function Takens() {
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const [dataList, setDataList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setDataList([...dataList, { names, emails, passwords }]);

    
    setNames("");
    setEmails("");
    setPasswords("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)} 
        />

        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={passwords}
          onChange={(e) => setPasswords(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {dataList.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          {dataList.map((item, index) => (
            <div key={index}>
              <h3>Name: {item.names}</h3>
              <h3>Email: {item.emails}</h3>
              <h3>Password: {item.passwords}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

