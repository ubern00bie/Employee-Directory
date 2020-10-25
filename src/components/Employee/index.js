import React, { Component } from 'react';

const Employee = ({employees}) => {
    const employeeList = employees.map(employee => {
        console.log(employee);
        return(
            <tr className="employee" key={employee.id}>
                <td>{ employee.id }</td>
                <td>{ employee.name }</td>
                <td>{ employee.title }</td>
            </tr>
        )
    })
    return(
        <tbody>
            { employeeList }
        </tbody>
    )
}


export default Employee;