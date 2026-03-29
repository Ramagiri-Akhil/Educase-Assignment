import MobileContainer from '../components/MobileContainer'
import { FaCamera } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  }

  return (
    <MobileContainer>
      <div className="flex flex-col min-h-screen bg-[#f7f8f9]">
        
        <div className="bg-white px-4 py-4 ">
          <h1 className="text-sm font-semibold text-[#1D2226] tracking-wide">
            Account Settings
          </h1>
        </div>

        <button 
        className='text-end text-red-600 underline  mt-2 px-3  rounded-sm text-xs font-medium cursor-pointer'
        onClick={handleLogout}
        >
          logout
        </button>

        <div className="px-4  border-b border-dashed border-gray-300">
          <div className="flex items-start gap-5">
            
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                loading='lazy'
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#6C25FF] flex items-center justify-center ">
                <span className="text-white text-xs"><FaCamera/></span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-[#1D2226]">
                {user?.fullName || 'User Name'}
              </h2>

              <p className="text-xs text-[#1D2226]">
                {user?.email || 'user@gmail.com'}
              </p>
            </div>
          </div>

          <p className="text-xs font-medium text-[#1D2226] leading-5 mt-7 pb-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="border-b md:border-dashed border-gray-300  h-105"></div>
      </div>
    </MobileContainer>
  )
}

export default Dashboard