import axios from "axios";

export default{ 
    getUsers:function(){    
        return (axios.get("https://randomuser.me/api/?results=20&nat=us"))
    }
}


// useEffect(()=> {
//     async function getEmployees(){
//         try {
//             const response = await axios.get(url)
//             setEmployees(response.data.results)
//             setDisplayedEmployees(response.data.results)
//         }
//         catch (error) {
//             console.log("error ocurred getting info from the API: ", error)
//         }   
//     }
//     getEmployees()
// },[])