import React, { useState } from "react";

export default function Inputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({
      name,
      email,
    });
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {data && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}