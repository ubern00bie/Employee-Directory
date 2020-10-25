import React, {setDeveloperState, developerState, useState} from 'react';
import API from "../../utils/API"

const Employee = ({employees}) => {

    const [developerState, setDeveloperState] = React.useState({
        employees: [],
        order: "descend",
        filteredEmployess: []
      });

    React.useEffect(() => {
        API.getUsers().then(results => {
          console.log(results.data.results);
          setDeveloperState({
            ...developerState,
            employees: results.data.results,
            filteredEmployees: results.data.results
          });
        });
      }, []);

    const employeeList = developerState.employees.map(employee => {
        console.log(employee);
        return(
            <tr className="employee" key={employee.id.value}>
                <td>{ employee.id.value }</td>
                <td>{ employee.name.first }</td>
                <td>{ employee.email }</td>
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