"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required.";
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Invalid phone number.";
    if (!formData.email) tempErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email address is invalid.";
    if (!formData.password) tempErrors.password = "Password is required.";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm password is required.";
    else if (formData.confirmPassword !== formData.password) tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
        try {
            const response = await fetch('http://localhost:8080/api/Signup', { // Replace with your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                // Handle success (e.g., show a success message or redirect)
            } else {
                console.error("Error submitting form", await response.text());
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error("Network error", error);
            // Handle network error
        }
    }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="relative w-96">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-200 rounded-lg transform rotate-[-10deg] z-0"></div>
        <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
          <h2 className="text-2xl font-bold mb-6 font-sans text-black">
            Signup
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black ${errors.username && "border-red-500"}`}
                placeholder="Username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black ${errors.phone && "border-red-500"}`}
                placeholder="Phone Number"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black ${errors.email && "border-red-500"}`}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black ${errors.password && "border-red-500"}`}
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black ${errors.confirmPassword && "border-red-500"}`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-blue-500 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 mb-4 font-sans"
            >
              Submit
            </button>
            <span className="inline-block w-4"></span>{" "}
            {/* Gap between buttons */}
            <button
              type="button"
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center font-sans"
            >
              <img
                className="w-6 h-6 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="Google logo"
              />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
