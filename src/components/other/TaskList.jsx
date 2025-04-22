import  { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/ContextProvider'
import EmployeePersonal from '../EmployeeDashboard/EmployeePersonal';

const TaskList = () => {

    const { employees } = useContext(UserContext);
    const{selectedEmployee,setSelectedEmployee}=useContext(UserContext);


    
    return (
       <>

       {! selectedEmployee? <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
            <div
                onClick={()=>setSelectedEmployee(employee)}
                key={employee.id}
                className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-lg rounded-2xl p-5 border border-gray-200 transition-transform duration-300 transform hover:scale-105"
            >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold mb-4 sm:mb-0 sm:mr-6">
                    {employee.name.charAt(0)}
                </div>
                <div className="flex-1 space-y-1 text-gray-800">
                    <p className="text-lg font-semibold">{employee.name}</p>
                    <p className="text-sm text-gray-600">ID: {employee.id}</p>
                    <p className="text-sm">
                        <span className="font-medium text-green-600">Completed:</span> {employee.completedTask}
                    </p>
            
                </div>
            </div>
        ))}
    </div>:""}

{
    selectedEmployee?<EmployeePersonal employee={selectedEmployee}/>:""
}

       </>



    )
}

export default TaskList