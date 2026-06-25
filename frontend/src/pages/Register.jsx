// import {
//   useState
// } from "react";

// import {
//   useNavigate
// } from "react-router-dom";

// import API
// from "../api/api";

// export default function Register() {

//   const navigate =
//     useNavigate();

//   const [form, setForm] =
//     useState({
//       name: "",
//       email: "",
//       password: "",
//       address: ""
//     });

//   const handleChange =
//   (e) => {

//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.value
//     });

//   };

//   const handleSubmit =
//   async (e) => {

//     e.preventDefault();

//     try {

//       await API.post(
//         "/auth/register",
//         form
//       );

//       alert(
//         "Registered Successfully"
//       );

//       navigate("/");

//     } catch (error) {

//       alert(
//         error.response.data.message
//       );

//     }
//   };

//   return (
//     <div>

//       <h2>
//         Register
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//       >

//         <input
//           name="name"
//           placeholder="Name"
//           onChange={
//             handleChange
//           }
//         />

//         <br /><br />

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={
//             handleChange
//           }
//         />

//         <br /><br />

//         <input
//           name="address"
//           placeholder="Address"
//           onChange={
//             handleChange
//           }
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={
//             handleChange
//           }
//         />

//         <br /><br />

//         <button>
//           Register
//         </button>

//       </form>

//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import API from "../api/api";

export default function Register() {

  const navigate =
    useNavigate();

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      address: "",
    });

  const handleChange =
    (e) => {

      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/auth/register",
          form
        );

        alert(
          "Registered Successfully"
        );

        navigate("/");

      } catch (error) {

        alert(
          error?.response?.data?.message ||
          "Registration Failed"
        );

      }
    };

  return (

    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-blue-100 p-8">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-blue-700">
            Store Rating System
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Address
            </label>

            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <div className="text-center mt-6">

          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link
            to="/"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Login Here
          </Link>

        </div>

      </div>

    </div>

  );
}