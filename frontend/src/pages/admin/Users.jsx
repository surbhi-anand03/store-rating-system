// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";



// export default function Users() {

// const [users, setUsers] =
// useState([]);

// const [search, setSearch] =
// useState("");

// const [role, setRole] =
// useState("");

// const [sort, setSort] =
// useState("name");

// const [order, setOrder] =
// useState("asc");

// useEffect(() => {
// loadUsers();
// }, []);

// const loadUsers =
// async () => {

// try {

//   const res =
//     await API.get(
//       `/admin/users?search=${search}&role=${role}&sort=${sort}&order=${order}`
//     );

//   setUsers(res.data);

// } catch (error) {

//   console.log(error);

// }

// };

// return (
// <> <Navbar />

// ```
//   <div
//     style={{
//       padding: "20px",
//       maxWidth: "1200px",
//       margin: "0 auto"
//     }}
//   >

//     <h1
//       style={{
//         marginBottom: "20px"
//       }}
//     >
//       Users Management
//     </h1>

//     <div
//       style={{
//         display: "flex",
//         gap: "10px",
//         flexWrap: "wrap",
//         marginBottom: "20px"
//       }}
//     >

//       <input
//         type="text"
//         placeholder="Search users..."
//         value={search}
//         onChange={(e) =>
//           setSearch(e.target.value)
//         }
//         style={{
//           padding: "10px",
//           minWidth: "250px"
//         }}
//       />

//       <select
//         value={role}
//         onChange={(e) =>
//           setRole(e.target.value)
//         }
//         style={{
//           padding: "10px"
//         }}
//       >
//         <option value="">
//           All Roles
//         </option>

//         <option value="admin">
//           Admin
//         </option>

//         <option value="user">
//           User
//         </option>

//         <option value="owner">
//           Owner
//         </option>

//       </select>

//       <select
//         value={sort}
//         onChange={(e) =>
//           setSort(e.target.value)
//         }
//         style={{
//           padding: "10px"
//         }}
//       >
//         <option value="name">
//           Sort By Name
//         </option>

//         <option value="email">
//           Sort By Email
//         </option>

//       </select>

//       <select
//         value={order}
//         onChange={(e) =>
//           setOrder(e.target.value)
//         }
//         style={{
//           padding: "10px"
//         }}
//       >
//         <option value="asc">
//           Ascending
//         </option>

//         <option value="desc">
//           Descending
//         </option>

//       </select>

//       <button
//         onClick={loadUsers}
//         style={{
//           padding: "10px 20px",
//           cursor: "pointer"
//         }}
//       >
//         Search
//       </button>

//     </div>

//     <table
//       border="1"
//       cellPadding="10"
//       style={{
//         width: "100%",
//         borderCollapse:
//           "collapse"
//       }}
//     >

//       <thead>

//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Role</th>
//           <th>Action</th>
//         </tr>

//       </thead>

//       <tbody>

//         {users.map((user) => (

//           <tr
//             key={user._id}
//           >

//             <td>
//               {user.name}
//             </td>

//             <td>
//               {user.email}
//             </td>

//             <td>
//               {user.address}
//             </td>

//             <td>
//               {user.role}
//             </td>

//             <td>

//               <Link
//                 to={`/admin/users/${user._id}`}
//               >
//                 View
//               </Link>

//             </td>

//           </tr>

//         ))}

//       </tbody>

//     </table>

//   </div>
// </>

// );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await API.get(
        `/admin/users?search=${search}&role=${role}&sort=${sort}&order=${order}`
      );

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Users Management
            </h1>

            <p className="text-slate-500 mt-2">
              Search, filter and manage platform users
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-6">
            <div className="grid md:grid-cols-5 gap-4">

              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="border border-slate-300 rounded-lg px-4 py-3"
              >
                <option value="">
                  All Roles
                </option>

                <option value="admin">
                  Admin
                </option>

                <option value="user">
                  User
                </option>

                <option value="owner">
                  Owner
                </option>
              </select>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="border border-slate-300 rounded-lg px-4 py-3"
              >
                <option value="name">
                  Sort By Name
                </option>

                <option value="email">
                  Sort By Email
                </option>
              </select>

              <select
                value={order}
                onChange={(e) =>
                  setOrder(e.target.value)
                }
                className="border border-slate-300 rounded-lg px-4 py-3"
              >
                <option value="asc">
                  Ascending
                </option>

                <option value="desc">
                  Descending
                </option>
              </select>

              <button
                onClick={loadUsers}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-3 font-medium transition"
              >
                Search
              </button>

            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">
                Registered Users
              </h2>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-blue-600 text-white">

                  <tr>
                    <th className="px-6 py-4 text-left">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left">
                      Address
                    </th>

                    <th className="px-6 py-4 text-center">
                      Role
                    </th>

                    <th className="px-6 py-4 text-center">
                      Action
                    </th>
                  </tr>

                </thead>

                <tbody>

                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr
                        key={user._id}
                        className="border-b hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-medium">
                          {user.name}
                        </td>

                        <td className="px-6 py-4">
                          {user.email}
                        </td>

                        <td className="px-6 py-4">
                          {user.address}
                        </td>

                        <td className="px-6 py-4 text-center">

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold
                            ${
                              user.role === "admin"
                                ? "bg-red-100 text-red-700"
                                : user.role === "owner"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {user.role}
                          </span>

                        </td>

                        <td className="px-6 py-4 text-center">

                          <Link
                            to={`/admin/users/${user._id}`}
                            className="bg-indigo-50 hover:bg-indigo-500 hover:text-white border border-indigo-400 text-indigo-600 px-4 py-2 rounded-lg text-sm transition"
                          >
                            View Details
                          </Link>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-8 text-slate-500"
                      >
                        No users found
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* Footer Stats */}
          <div className="mt-6 bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-semibold text-slate-700">
              Total Users
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {users.length}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}