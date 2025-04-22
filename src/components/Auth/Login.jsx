import { useContext,  useState } from 'react';
import { UserContext } from '../../context/ContextProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // useContext for getting data
   const {setUser}=useContext(UserContext)

  // handle  login employee
  const handleEmployeeLogin = () => {
    setUser("employee");
    // save local storage
    localStorage.setItem("user","Employee")
  };
   
  // handle login admin
  const handleAdminLogin = () => {
    setUser("admin");
    //save local storage
    localStorage.setItem("user","Admin")
  };
  

  // hanndle the submit form
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#000000] px-4">
    <div className="w-full max-w-lg md:max-w-lg border-4 border-white p-8 md:p-12 rounded-xl shadow-lg bg-[#1D1616]">
      <h1 className="text-3xl md:text-5xl text-white text-center font-bold mb-6">Welcome Back</h1>
      
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-center mt-6 space-y-8">
        <div className="w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full py-3 px-5 text-white bg-transparent border-2 border-white rounded-full text-lg placeholder:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full py-3 px-5 text-white bg-transparent border-2 border-white rounded-full text-lg placeholder:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="password"
            placeholder="Enter password"
          />
        </div>
  
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="w-full py-3 px-5 text-lg font-semibold text-white bg-[#D84040] rounded-full hover:bg-[#791e1e]"
            onClick={handleAdminLogin}
          >
            Admin Login
          </button>
  
          <button
            type="button"
            className="w-full py-3 px-5 text-lg font-semibold text-white bg-gradient- rounded-full bg-[#D84040]  hover:bg-[#791e1e]"
            onClick={handleEmployeeLogin}
          >
            Employee Login
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Login;

