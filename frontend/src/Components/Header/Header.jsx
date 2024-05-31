import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
    const { user } = useContext(AuthContext);
  return (
    <header className=" bg-white shadow sticky top-0 z-50 w-full">
        <nav className="flex justify-between items-center py-3 container mx-auto bg-white">
            <Link to="/"><button className="btn btn-ghost text-2xl text-green-600 hover:bg-white hover:shadow-md font-bold    px-1 md:p-0">MoneyMate</button></Link>
            <Link to="/whyus">
            <div className="text-green-600 font-sans flex flex-row justify-center items-center gap-3">
              Why Us 
              <FaAngleDown />
            </div>
            </Link>
            <div>
            {user ? (
              <div className="flex gap-4">
                <div>
                  hi, {user?.name}
                </div>
                <button className=" text-black font-space-4 border-black border-[1px] px-3 hover:shadow-xl rounded-md">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 md:gap-3 pr-[1px] md:pr-3">
                <Link to="/login">
                  <button className=" text-black font-space-4 border-black border-[1px] px-3 py-1  hover:shadow-xl rounded-md">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" text-white font-space-4 border-[1px] border-green-600 bg-green-600 px-3 py-1  hover:shadow-xl rounded-md hover:bg-blue-950">
                    Register
                  </button>
                </Link>
              </div>
            )}
            </div>
        </nav>
    </header>
  );
};

export default Header;
