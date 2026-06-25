
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const role =
//     localStorage.getItem("role");

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

//       <h1 className="font-bold text-xl text-blue-600">
//         Store Ratings
//       </h1>

//       <div className="flex gap-5">

//         {role === "admin" && (
//           <>
//             <Link to="/admin/dashboard">
//               Dashboard
//             </Link>

//             <Link to="/admin/users">
//               Users
//             </Link>

//             <Link to="/admin/stores">
//               Stores
//             </Link>

//             <Link to="/admin/create-user">
//               Create User
//             </Link>

//             <Link to="/admin/create-store">
//               Create Store
//             </Link>
//           </>
//         )}

//         {role === "user" && (
//           <Link to="/stores">
//             Stores
//           </Link>
//         )}

//         {role === "owner" && (
//           <Link to="/owner/dashboard">
//             Dashboard
//           </Link>
//         )}

//         <Link to="/change-password">
//           Change Password
//         </Link>

//       </div>

//       <button
//         onClick={logout}
//         className="bg-red-500 text-white px-4 py-2 rounded-lg"
//       >
//         Logout
//       </button>

//     </nav>
//   );
// }

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const role = localStorage.getItem("role");
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const activeClass =
    "text-blue-700 font-semibold border-b-2 border-blue-700";

  const normalClass =
    "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-8 py-4">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Store Ratings
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          {role === "admin" && (
            <>
              <Link
                to="/admin/dashboard"
                className={
                  location.pathname ===
                  "/admin/dashboard"
                    ? activeClass
                    : normalClass
                }
              >
                Dashboard
              </Link>

              <Link
                to="/admin/users"
                className={
                  location.pathname ===
                  "/admin/users"
                    ? activeClass
                    : normalClass
                }
              >
                Users
              </Link>

              <Link
                to="/admin/stores"
                className={
                  location.pathname ===
                  "/admin/stores"
                    ? activeClass
                    : normalClass
                }
              >
                Stores
              </Link>

              <Link
                to="/admin/create-user"
                className={
                  location.pathname ===
                  "/admin/create-user"
                    ? activeClass
                    : normalClass
                }
              >
                Create User
              </Link>

              <Link
                to="/admin/create-store"
                className={
                  location.pathname ===
                  "/admin/create-store"
                    ? activeClass
                    : normalClass
                }
              >
                Create Store
              </Link>
            </>
          )}

          {role === "user" && (
            <Link
              to="/stores"
              className={
                location.pathname === "/stores"
                  ? activeClass
                  : normalClass
              }
            >
              Stores
            </Link>
          )}

          {role === "owner" && (
            <Link
              to="/owner/dashboard"
              className={
                location.pathname ===
                "/owner/dashboard"
                  ? activeClass
                  : normalClass
              }
            >
              Dashboard
            </Link>
          )}

          <Link
            to="/change-password"
            className={
              location.pathname ===
              "/change-password"
                ? activeClass
                : normalClass
            }
          >
            Change Password
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}