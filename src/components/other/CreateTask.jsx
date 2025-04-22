import { useContext, useState } from 'react'
import { UserContext } from '../../context/ContextProvider';





// we have to use two way binding in every input in the form
const CreateTask = () => {

    const [title, setTaskTitle] = useState('');
    const [description, setTaskDescription] = useState('');
    const [date, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');
    const [idNo, setIdNo] = useState("")


    const [task, setTask] = useState({})

    const { employees, setEmployees } = useContext(UserContext)

    function handleTaskSubmit(e) {
        e.preventDefault();
      
        const newTask = {
          taskId: Date.now(), // Unique ID
          title,
          description,
          date,
          category,
          completed: false,
          accepted: false,
        };
      
        const updatedEmployees = employees.map((employee) => {
          if (employee.id === idNo) {
            return {
              ...employee,
              tasks: [...(employee.tasks || []), newTask], // fallback in case tasks is undefined
            };
          }
          return employee;
        });
      
        console.log("Updated employees:", updatedEmployees); // ✅ Moved outside map
      
        setEmployees(updatedEmployees);
      
        // Clear the form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAsignTo('');
        setCategory('');
        setIdNo('');
      }







    return (
        <div className='p-6 bg-gradient-to-r bg-[#1D1616] mt-7 rounded-xl '>
            <form className='flex items-start justify-between w-full flex-wrap' id="form" onSubmit={(e) => handleTaskSubmit(e)}>
                <div className='w-full md:w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-200 mb-2'>Date</h3>
                        <input
                            type="date"
                            className='text-sm py-2 px-4 w-full md:w-4/5 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                            value={date}
                            onChange={(e) => setTaskDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-200 mb-2'>Assign To</h3>
                        <input
                            type="text"
                            placeholder="Employee name"
                            className='text-sm py-2 px-4 w-full md:w-4/5 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-200 mb-2'>Category</h3>
                        <input
                            type="text"
                            placeholder="Design, Dev, etc."
                            className='text-sm py-2 px-4 w-full md:w-4/5 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-200 mb-2'>ID No.</h3>
                        <input
                            type="number"
                            placeholder="ID number"
                            className='text-sm py-2 px-4 w-full md:w-4/5 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                            min="1"
                            max='10'
                            value={idNo}
                            onChange={(e) => setIdNo(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-200 mb-2'>Task Title</h3>
                        <input
                            type="text"
                            placeholder='Enter task title'
                            className='text-sm py-2 px-4 w-full md:w-4/5 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                            value={title}
                            onChange={(e) => setTaskTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-200 mb-2'>Description</h3>
                    <textarea
                        className='w-full h-40 text-sm py-3 px-4 rounded-xl outline-none bg-transparent border-2 border-gray-400 mb-4 focus:ring-2 focus:ring-emerald-400'
                        value={description}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    ></textarea>
                    <button
                        className='bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition-all duration-300 ease-in-out px-6 py-3 rounded-full text-lg mt-4 w-full bg-red-400 font-bold '
                        type="submit"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CreateTask