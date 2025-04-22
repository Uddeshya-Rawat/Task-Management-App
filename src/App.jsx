import {  useContext } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/EmployeeDashboard/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
import { UserContext } from "./context/ContextProvider";


function App() {
    // user is in contextApi from there it is passed as context 

    const {user}=useContext(UserContext)

return(
  <>
  
  {!user? /* send setUser for functionalty */ <Login />:""}
  {user==="Admin"? <AdminDashboard/>:""}
  {user==="Employee"?<EmployeeDashboard/>:''}

  
  </>
 )


}

export default App;


