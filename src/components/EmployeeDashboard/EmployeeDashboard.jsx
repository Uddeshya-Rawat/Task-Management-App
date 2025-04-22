import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'




const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#000000] h-screen w-screen text-white '>
        <Header/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard