// import { useState } from "react";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";

// export default function CreateUser() {

//   const [form, setForm] =
//     useState({
//       name:"",
//       email:"",
//       password:"",
//       address:"",
//       role:"user"
//     });

//   const handleChange =
//   (e) => {

//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.value
//     });

//   };

//   const submit =
//   async (e) => {

//     e.preventDefault();

//     try {

//       await API.post(
//         "/admin/users",
//         form
//       );

//       alert(
//         "User Created"
//       );

//     } catch (error) {

//       alert(
//         error.response.data.message
//       );

//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <form onSubmit={submit}>

//         <input
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           name="address"
//           placeholder="Address"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <select
//           name="role"
//           onChange={handleChange}
//         >
//           <option value="user">
//             User
//           </option>

//           <option value="admin">
//             Admin
//           </option>

//           <option value="owner">
//             Owner
//           </option>
//         </select>

//         <button>
//           Create User
//         </button>

//       </form>
//     </>
//   );
// }

import { useState } from "react";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function CreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/admin/users",
        form
      );

      alert(
        "User Created Successfully"
      );

      setForm({
        name: "",
        email: "",
        password: "",
        address: "",
        role: "user",
      });
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Failed to create user"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Create New User
          </h1>

          <form
            onSubmit={submit}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter Address"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-sm text-gray-500 mt-2">
                Password must be 8-16 characters,
                contain one uppercase letter and
                one special character.
              </p>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                User Role
              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">
                  User
                </option>

                <option value="owner">
                  Store Owner
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
