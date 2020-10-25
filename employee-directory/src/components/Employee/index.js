import React, { Component } from 'react';

const Employee = ({employees}) => {
    console.log(employees);
    const employeeList = employees.map(employee => {
        console.log(employee);
        return(
            <tr>
                <td>{ employee.id }</td>
                <td>{ employee.name }</td>
                <td>{ employee.title }</td>
            </tr>
        )
    })
    console.log(employeeList)
    return(
        
        <tbody>
            { employeeList }
        </tbody>
    )
}


export default Employee;