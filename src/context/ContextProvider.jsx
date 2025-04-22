import {  createContext,  useEffect,  useState } from "react";

import employee from '../data.js/data'

 export const UserContext=createContext()
 
const ContextProvider = ({children}) => {
     const [user,setUser]=useState("")
     const [employees,setEmployees]=useState('')


     //select employee
     const[selectedEmployee,setSelectedEmployee]=useState(null)

     // get data form local storage for user and set it , every time when user is changed this will happen
     useEffect(()=>{
      const User=localStorage.getItem("user")
      setUser(User)
     },[user])
     

     // set data of employees
     useEffect(() => {
      const storedEmployees = JSON.parse(localStorage.getItem("employees"));
      if (storedEmployees) {
        setEmployees(storedEmployees);
      } else {
        localStorage.setItem("employees", JSON.stringify(employee));
        setEmployees(employee);
      }
    }, []);


    // save employee data whenever they chnage
    useEffect(() => {
      if (employees.length > 0) {
        localStorage.setItem("employees", JSON.stringify(employees));
      }
    }, [employees]);
  

  


    // add data from local storage if it is available for employer
    useEffect(() => {
        const savedEmployer = localStorage.getItem("employer");
        if (savedEmployer) {
          setSelectedEmployee(JSON.parse(savedEmployer));
        }
      }, []);


      // add data when employer selected
    useEffect(()=>{
        if(!selectedEmployee){
              localStorage.setItem("employer","")
        }else{
            localStorage.setItem("employer", JSON.stringify(selectedEmployee));
        }
    })

    // set employer data when there is change
    



   

     
   return (
     <UserContext.Provider value={{user,setUser,employees,setEmployees,selectedEmployee,setSelectedEmployee}}>
       {children}
     </UserContext.Provider>
   )
 }

 export default ContextProvider
 
