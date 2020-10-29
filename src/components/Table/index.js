import React, {useState, Component, useEffect} from "react";
import Employee from "../Employee"

class Table extends Component {  

    render(){
        return(
        <table className="table table-dark">
            <Employee />
        </table>
        )
    }   
}

export default Table;