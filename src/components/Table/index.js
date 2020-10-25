import React, {useState, Component} from "react";
// import getUsers from "../../utils/API"
import Employee from "../Employee"

class Table extends Component {  
    state = {
        employees : [
            { id:1, name:'Bob Roberts', title:'Custodian' },
            { id:2, name:'Jim James', title:'Cashier' },
            { id:3, name:'Dick Richards', title:'Manager' }
        ]
    }  

    render(){
        return(
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Employee Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                </tr>
            </thead>
            <Employee employees={this.state.employees}/>
        </table>
        )
    }   
}

export default Table;