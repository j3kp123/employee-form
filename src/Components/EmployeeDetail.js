import React from 'react';
import { useParams } from 'react-router-dom';
import '../Content/employee.css';

function EmployeeDetail(props) {
  // grab the id from the URL
  const { id } = useParams();
  
  // find employee by id
  const employee = props.employees.find((employee) => employee.EmployeeId === parseInt(id));
  const { EmployeeId, name, email, jobTitle, department } = employee || {}; // Provide fallback object if employee is undefined

  // render HTML with employee info
  return (
    <div className="employee-detail">
      <table>
        <tbody>
          <tr>
            <td><label>Employee ID: </label></td>
            <td>{EmployeeId}</td>
          </tr>
          <tr>
            <td><label>Name: </label></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><label>Email: </label></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><label>Job Title: </label></td>
            <td>{jobTitle}</td>
          </tr>
          <tr>
            <td><label>Department: </label></td>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetail;
