import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

const Landing = () => {

    const navigate =useNavigate()

  return (
    <MobileContainer>
        <div className="flex flex-col justify-end h-screen p-4 ">
          <div className="py-5">
            <h1 className="text-2xl font-bold text-black mb-1 " >
              Welcome to PopX
            </h1>
            <p className="text-gray-500 mb-6 w-62.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button 
            onClick={()=>navigate("/signup")}
            className="w-full bg-violet-600 text-white py-2.5 rounded-sm text-sm mb-2 font-medium cursor-pointer tracking-wide"
            >
              Create Account
            </button>
            <button 
            onClick={()=>navigate("/login")}
            className="w-full bg-violet-300 text-gray-800 py-2.5 rounded-sm text-sm font-semibold cursor-pointer "
            >
              Already Registered? Login
            </button>
          </div>
        </div>
    </MobileContainer>
  )
}

export default Landing