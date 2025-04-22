import React, { useContext } from 'react'
import { UserContext } from '../../context/ContextProvider';




const EmployeePersonal = ({ employee }) => {
  const { employees, setEmployees, setSelectedEmployee } = useContext(UserContext);

  // Handler to accept a task
  const handleAcceptTask = (taskId) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employee.id) {
        
        // Set accepted = true for the matching task
        const updatedTasks = emp.tasks.map((task) =>{
          
           return task.taskId === taskId ? { ...task,accepted: true } : task}
          
        );

              // Increment workingTask only if it's not already accepted
      const wasAlreadyAccepted = emp.tasks.find((t) => t.taskId === taskId)?.accepted;
      const newWorkingCount = wasAlreadyAccepted ? emp.workingTask : emp.workingTask + 1;

        return { ...emp, tasks: updatedTasks ,workingTask:newWorkingCount  };
      }
      return emp;
    });

    console.log(updatedEmployees)

    setEmployees(updatedEmployees);
    // Update selectedEmployee to reflect changes immediately
    const newSelected = updatedEmployees.find((emp) => emp.id === employee.id);
  
    setSelectedEmployee(newSelected);
  };

  // Handler to mark a task as completed
  const handleMarkComplete = (taskId) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employee.id) {
        // Set completed = true for the matching task
        const updatedTasks = emp.tasks.map((task) =>
          task.taskId === taskId ? { ...task, completed: true } : task
        );

        // increment the completedTask when mark completed
        const wasAlreadyCompleted = emp.tasks.find((t) => t.taskId === taskId)?.completed;
      const newCompletedCount = wasAlreadyCompleted ? emp.completedTask : emp.completedTask + 1;

      return { ...emp, tasks: updatedTasks, completedTask: newCompletedCount };
      }
      return emp;
    });

    setEmployees(updatedEmployees);
    // Sync selectedEmployee
    const newSelected = updatedEmployees.find((emp) => emp.id === employee.id);
    setSelectedEmployee(newSelected);
  };
  


  return (
    <div className="p-4 sm:p-6 bg-white shadow-lg rounded-2xl text-black mt-12">
      <h2 className="text-2xl font-semibold mb-4">{employee.name}'s Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employee.tasks.map((task) => (
          <div
            key={task.taskId}
            className="p-4 border rounded-xl shadow-sm bg-gray-100 flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
            <p className="text-sm text-gray-700 flex-1">{task.description}</p>

            {/* Status Buttons */}
            <div className="mt-3 space-x-2">
              {task.completed && task.accepted ? (
                // Task accepted and completed
                <>
                  <button
                    className="px-3 py-2 bg-green-500 text-white rounded-lg text-sm"
                    disabled
                  >
                    Completed
                  </button>
                  <button
                    className="px-3 py-2 bg-green-500 text-white rounded-lg text-sm"
                    disabled
                  >
                    Accepted
                  </button>
                </>
              ) : task.accepted && !task.completed ? (
                // Task accepted but not yet completed
                <>
                  <button
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm"
                    onClick={() => handleMarkComplete(task.taskId)}
                  >
                    Mark Complete
                  </button>
                  <button
                    className="px-3 py-2 bg-yellow-500 text-white rounded-lg text-sm"
                    disabled
                  >
                    Accepted
                  </button>
                </>
              ) : (
                // Task not yet accepted
                <button
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
                  onClick={() => handleAcceptTask(task.taskId)}
                >
                  Accept
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePersonal;
