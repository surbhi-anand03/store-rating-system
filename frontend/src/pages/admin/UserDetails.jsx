// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";

// export default function UserDetails() {

//   const { id } = useParams();

//   const [user, setUser] =
//     useState(null);

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {

//     try {

//       const res =
//         await API.get(
//           `/admin/users/${id}`
//         );

//       setUser(res.data);

//     } catch (error) {

//       console.log(error);

//     }

//   };

//   if (!user) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <Navbar />

//       <div style={{ padding: "20px" }}>

//         <h2>User Details</h2>

//         <p>
//           <b>Name:</b> {user.name}
//         </p>

//         <p>
//           <b>Email:</b> {user.email}
//         </p>

//         <p>
//           <b>Address:</b> {user.address}
//         </p>

//         <p>
//           <b>Role:</b> {user.role}
//         </p>

//         {
//           user.role === "owner" && (
//             <p>
//               <b>Store Rating:</b>{" "}
//               {user.storeRating}
//             </p>
//           )
//         }

//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await API.get(
        `/admin/users/${id}`
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <>
        <Navbar />

        <div className="flex justify-center items-center h-[70vh]">
          <div className="text-xl font-semibold text-slate-600">
            Loading User Details...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                User Details
              </h1>

              <p className="text-slate-500 mt-1">
                Complete information about the selected user
              </p>
            </div>

            <Link
              to="/admin/users"
              className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition"
            >
              Back
            </Link>
          </div>

          {/* User Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Top Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    {user.name}
                  </h2>

                  <p className="opacity-90">
                    {user.email}
                  </p>
                </div>

              </div>

            </div>

            {/* Details */}
            <div className="p-8">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-slate-50 p-5 rounded-xl">
                  <p className="text-sm text-slate-500">
                    Full Name
                  </p>

                  <h3 className="text-lg font-semibold">
                    {user.name}
                  </h3>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl">
                  <p className="text-sm text-slate-500">
                    Email Address
                  </p>

                  <h3 className="text-lg font-semibold">
                    {user.email}
                  </h3>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl">
                  <p className="text-sm text-slate-500">
                    Role
                  </p>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-700"
                        : user.role === "owner"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role.toUpperCase()}
                  </span>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl">
                  <p className="text-sm text-slate-500">
                    Address
                  </p>

                  <h3 className="text-lg font-semibold">
                    {user.address}
                  </h3>
                </div>

                {user.role === "owner" && (
                  <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl md:col-span-2">
                    <p className="text-sm text-yellow-600">
                      Store Rating
                    </p>

                    <h3 className="text-3xl font-bold text-yellow-700 mt-2">
                      ⭐ {user.storeRating}
                    </h3>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}