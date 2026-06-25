// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api/api";

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post(
//         "/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       localStorage.setItem(
//         "token",
//         res.data.token
//       );

//       localStorage.setItem(
//         "role",
//         res.data.role
//       );

//       if (
//         res.data.role === "admin"
//       ) {
//         navigate(
//           "/admin/dashboard"
//         );
//       } else if (
//         res.data.role === "owner"
//       ) {
//         navigate(
//           "/owner/dashboard"
//         );
//       } else {
//         navigate("/stores");
//       }
//     } catch (error) {
//       alert(
//         error?.response?.data
//           ?.message ||
//           "Login Failed"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">

//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg border border-blue-100">

//         <div className="text-center mb-8">

//           <h1 className="text-3xl font-bold text-blue-700">
//             Store Rating System
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Login to continue
//           </p>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >

//           <div>

//             <label className="block mb-2 font-medium text-gray-700">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(
//                   e.target.value
//                 )
//               }
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             />

//           </div>

//           <div>

//             <label className="block mb-2 font-medium text-gray-700">
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) =>
//                 setPassword(
//                   e.target.value
//                 )
//               }
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             />

//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Login
//           </button>

//         </form>

//         <div className="text-center mt-6">

//           <p className="text-gray-600">
//             Don't have an account?
//           </p>

//           <Link
//             to="/register"
//             className="text-blue-600 font-semibold hover:text-blue-800"
//           >
//             Register Here
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import API from "../api/api";

export default function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await API.post(
            "/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "role",
          res.data.role
        );

        if (
          res.data.role === "admin"
        ) {

          navigate(
            "/admin/dashboard"
          );

        } else if (
          res.data.role === "owner"
        ) {

          navigate(
            "/owner/dashboard"
          );

        } else {

          navigate(
            "/stores"
          );

        }

      } catch (error) {

        alert(
          error?.response?.data
            ?.message ||
            "Login Failed"
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
            Login to continue
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
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
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
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
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <p className="text-gray-600">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Register Here
          </Link>

        </div>

      </div>

    </div>

  );
}