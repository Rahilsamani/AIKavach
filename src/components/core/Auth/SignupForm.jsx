import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // Handle Form Submission
  function handleOnSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = { ...formData };
    dispatch(setSignupData(signupData)); // Setting signup data to state To be used after otp verification
    dispatch(sendOtp(formData.email, navigate)); // Send OTP to user for verification
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }); // Reset
  }

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full flex-col gap-y-4 mt-8"
      >
        <div className="flex gap-x-4">
          <label>
            {/* First Name */}
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name
            </p>
            <input
              required
              type="text"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter First Name"
              name="firstName"
              className="bg-richblack-800 border border-richblack-500 rounded-[0.5rem] text-white w-full p-[12px]"
            />
          </label>

          <label>
            {/* Last Name */}
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name
            </p>
            <input
              required
              type="text"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter Last Name"
              name="lastName"
              className="bg-richblack-800 border border-richblack-500 rounded-[0.5rem] text-white w-full p-[12px]"
            />
          </label>
        </div>

        <label className="w-full">
          {/* Email */}
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
          </p>
          <input
            required
            type="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter Email Name"
            name="email"
            className="bg-richblack-800 border border-richblack-500 rounded-[0.5rem] text-white w-full p-[12px]"
          />
        </label>

        <div className="flex gap-x-4">
          {/* createPassword and Confirm Password */}
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleOnChange}
              value={password}
              placeholder="Enter Password"
              className="bg-richblack-800 border border-richblack-500 rounded-[0.5rem] text-white w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={handleOnChange}
              value={confirmPassword}
              placeholder="Confirm Password"
              className="bg-richblack-800 border border-richblack-500 rounded-[0.5rem] text-white w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-blue-100 text-richblack-5 py-[8px] px-[12px] font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
