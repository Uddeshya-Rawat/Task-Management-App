import { useContext } from "react";
import { UserContext } from "../../context/ContextProvider";


const Header = () => {

  const { user,setUser } = useContext(UserContext)
  function handleLogout() {
    localStorage.removeItem("user"); // remove user from local storage 
    localStorage.setItem("user", "")  // add user in local storage to empty 
    localStorage.removeItem("employer") // remove the employer after logout
    localStorage.setItem("employer","")
    setUser("");  // set user State empty string 
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-6 py-8 bg-[#8E1616] text-white w-full rounded-lg shadow-lg">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
        Welcome To {user} Dashboard 
      </h1>

      <button
        onClick={handleLogout}
        className="text-sm sm:text-base md:text-lg font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition-all duration-300 ease-in-out shadow-md"
      >
        Log Out
      </button>
    </div>

  );
};

export default Header;
