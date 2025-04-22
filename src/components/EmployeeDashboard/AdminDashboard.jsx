import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import TaskListNumber from '../other/TaskListNumber'


const AdminDashboard = () => {
    return (
        <>
            <div className='h-full w-full p-10 bg-[#000000] text-white'>
               <Header/>
               <CreateTask/>
               <TaskListNumber/>
                
            </div>
        </>
    )
}

export default AdminDashboard