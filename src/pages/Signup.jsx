import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.password.trim();

  const handleSignup = () => {
    if (!isFormValid) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <MobileContainer>
      <div className="px-4 pt-8 pb-6 min-h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-2xl  font-bold text-black w-47">
            Create your PopX account
          </h1>

          <div className="mt-5 space-y-6">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
                Phone number<span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="phone"
                placeholder="Marry Doe"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
                Email address<span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Marry Doe"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
                Password<span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs text-[#6C25FF] font-medium">
                Company name
              </label>

              <input
                type="text"
                name="company"
                placeholder="Marry Doe"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div>
              <p className="text-xs font-medium text-[#1D2226] mb-2">
                Are you an Agency?<span className="text-red-500">*</span>
              </p>

              <div className="flex items-center gap-6 ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="Yes"
                    checked={formData.agency === "Yes"}
                    onChange={handleChange}
                    className="accent-[#6C25FF] w-5 h-5"
                  />
                  <span className="text-xs text-[#1D2226]">Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="No"
                    checked={formData.agency === "No"}
                    onChange={handleChange}
                    className="accent-[#6C25FF] w-5 h-5"
                  />
                  <span className="text-xs text-[#1D2226]">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSignup}
          disabled={!isFormValid}
          className={`w-full py-2.5 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
            isFormValid
              ? "bg-[#6C25FF] hover:bg-[#5a1fe0] text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
};

export default Signup;
