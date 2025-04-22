import React, { useContext } from 'react'
import { UserContext } from '../../context/ContextProvider'

function TaskListNumber() {


  const { employees } = useContext(UserContext);
  console.log(employees)
  return (

    <div className='mt-12 bg-gradient-to-r bg-[#1D1616] p-6 rounded-lg text-white'>
      <div className='grid grid-cols-3 font-semibold text-lg border-b border-gray-600 pb-3 mb-3'>
        <p>Name</p>
        <p>ID</p>
        <p>Completed Tasks</p>
        
      </div>

      {
        employees.map((employee) => (
          <div
            key={employee.id}
            className='grid grid-cols-3 items-center text-sm border-b border-gray-600 py-3 mb-2 hover:bg-red-700  rounded-sm transition-transform duration-300 transform hover:scale-105'>

            <p>{employee.name}</p>
            <p>{employee.id}</p>
            <p>{employee.completedTask}</p>
          </div>
        ))
      }
    </div>



  )
}

export default TaskListNumber