import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileContainer from '../components/MobileContainer'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const isFormValid =
    formData.email.trim() && formData.password.trim()

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'))

if (
  savedUser &&
  formData.email.trim().toLowerCase() === savedUser.email.toLowerCase() &&
  formData.password === savedUser.password
) {
  localStorage.setItem('isAuthenticated', 'true')
  navigate('/dashboard')
} else {
  alert('Invalid email or password')
}
  }

  return (
    <MobileContainer>
      <div className="px-4 pt-8 min-h-screen">
        <h1 className="text-2xl  font-bold text-[#1D2226] w-55">
          Signin to your PopX account
        </h1>

        <p className="text-[#6C757D]  mt-1  w-62.5 text-xm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-5 space-y-4">
          <div className="relative">
            <label className="absolute text-xs -top-2 left-3 bg-[#f7f8f9] px-1  text-[#6C25FF] font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-xs outline-none focus:border-[#6C25FF]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-xs outline-none focus:border-[#6C25FF]"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`text-xs w-full py-2.5 rounded-md font-semibold transition-all duration-300 ${
              isFormValid
                ? 'bg-[#CBCBCB] hover:bg-[#6C25FF] text-white'
                : 'bg-[#CBCBCB] text-white cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </MobileContainer>
  )
}

export default Login