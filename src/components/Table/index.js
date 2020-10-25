import React, {useState, Component, useEffect} from "react";
import Employee from "../Employee"

class Table extends Component {  

    render(){
        return(
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Employee Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <Employee />
        </table>
        )
    }   
}

export default Table;