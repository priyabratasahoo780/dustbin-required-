import React, { useState } from "react";

function Questiontwo() {
  const initialEmployees = [
    { id: 1, name: "John", salary: 50000 },
    { id: 2, name: "Jane", salary: 60000 },
    { id: 3, name: "Doe", salary: 55000 },
  ];

  const [employees, setEmployees] = useState([]);

  const handleShow = () => {
    setEmployees(initialEmployees);
  };

  return (
    <div>
      
      {employees.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>Salary: {emp.salary}</p>
        </div>
      ))}

      <button onClick={handleShow}>Show Employees</button>
      <button onClick={handleShow}>Show Salary</button>
    </div>
  );
}

export default Questiontwo;