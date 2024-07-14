// import libraries
import React, { useState } from 'react';
import '../Content/employee.css';

// define function
function EmployeeForm(props) {
  
    // define varibles and set functions and default state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setjobTitle] = useState('');
    const [department, setDepartment] = useState('');

    // define a submit function
    const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      EmployeeId: Math.floor(Math.random() * 10000),
      name,
      email,
      jobTitle,
      department,
    };
    props.onSubmit(employee);
    setName('');
    setEmail('');
    setjobTitle('');
    setDepartment('');
  };


  // Render the HTML
  return (
    // define the form
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title: </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setjobTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department: </label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

// allow the Component to be called from elsewhere
export default EmployeeForm;
