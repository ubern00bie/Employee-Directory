import React, {setDeveloperState, developerState, useState} from 'react';
import API from "../../utils/API"

const Employee = (props) => {

    //set up developer state with 2 empty arrays and a default sorting configuration
    const [developerState, setDeveloperState] = React.useState({
        employees: [],
        tableList: [],
        tableArray: [],
        sortedField: "name"
        // sortConfiguration:"descending"
    });
    
    const employeeList = developerState.employees.map(employee => 
    {
      return(
        {
          firstName:employee.name.first,
          lastName:employee.name.last,
          phone:employee.phone,
          email:employee.email
        }
      )
    })

    let tableList = employeeList.map(employee => { 
      return(
          <tr className="employee" key={employee.phone}>
              <td>{ employee.firstName }</td>
              <td>{ employee.lastName }</td>
              <td>{ employee.phone }</td>
              <td>{ employee.email }</td>
          </tr>
      )
    })
    const Table = (sortedField, sortedEmployees) => {
     console.log(sortedField)
     console.log(sortedEmployees)
    }
    
    const sortName = ((sortedField)=> {
      console.log(sortedField);
      const sortedEmployees = [...employeeList];
      sortedEmployees.sort((a, b) => {
        if(a[sortedField] < b[sortedField]) {
          return -1;
        }
        if(a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
      console.log(sortedEmployees)
      setDeveloperState({
        ...developerState,
        tableList: sortedEmployees
      })
    })

    React.useEffect(() => {
      API.getUsers().then(results => {
        setDeveloperState({
          ...developerState,
          employees: results.data.results,
        });
        //function to render table
      });
  }, []);
    return(
      <tbody>
        <tr>
          <th scope="col">
            <button type="button" onClick={() => sortName('firstName')}>First Name</button>
          </th>
          <th scope="col">  
            <button type="button" onClick={() => sortName('lastName')}>Last Name</button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortName('phone')}>Phone</button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortName('email')}>Email</button>
          </th>
        </tr>
        {/* {tableList} */}
        <Table sortedField={'name'} sortedEmployees={tableList}></Table>
      </tbody>
    )
}

export default Employee;