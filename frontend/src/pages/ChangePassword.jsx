// import { useState } from "react";
// import API from "../api/api";

// export default function ChangePassword() {

//   const [oldPassword,
//     setOldPassword] =
//     useState("");

//   const [newPassword,
//     setNewPassword] =
//     useState("");

//   const submit =
//   async (e) => {

//     e.preventDefault();

//     try {

//       await API.put(
//         "/auth/change-password",
//         {
//           oldPassword,
//           newPassword
//         }
//       );

//       alert(
//         "Password Updated"
//       );

//     } catch (error) {

//       alert(
//         error.response.data.message
//       );

//     }
//   };

//   return (

//     <form onSubmit={submit}>

//       <input
//         type="password"
//         placeholder="Old Password"
//         value={oldPassword}
//         onChange={(e) =>
//           setOldPassword(
//             e.target.value
//           )
//         }
//       />

//       <input
//         type="password"
//         placeholder="New Password"
//         value={newPassword}
//         onChange={(e) =>
//           setNewPassword(
//             e.target.value
//           )
//         }
//       />

//       <button>
//         Change Password
//       </button>

//     </form>

//   );
// }

import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        "/auth/change-password",
        {
          oldPassword,
          newPassword,
        }
      );

      alert("Password Updated");

      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-50 p-6">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg border border-blue-100 p-8">

          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Change Password
          </h1>

          <form
            onSubmit={submit}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Old Password
              </label>

              <input
                type="password"
                placeholder="Enter old password"
                value={oldPassword}
                onChange={(e) =>
                  setOldPassword(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}