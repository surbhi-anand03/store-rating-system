// import { useEffect, useState } from "react";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";

// export default function Dashboard() {

//   const [data, setData] =
//     useState(null);

//   useEffect(() => {
//     loadDashboard();
//   }, []);

//   const loadDashboard =
//   async () => {

//     try {

//       const res =
//         await API.get(
//           "/owner/dashboard"
//         );

//       setData(res.data);

//     } catch (error) {

//       console.log(error);

//     }
//   };

//   if (!data) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <Navbar />

//       <div
//         style={{
//           padding: "20px"
//         }}
//       >

//         <h1>
//           Owner Dashboard
//         </h1>

//         <h2>
//           {data.storeName}
//         </h2>

//         <h3>
//           Average Rating:
//           {" "}
//           {data.averageRating}
//         </h3>

//         <table
//           border="1"
//           cellPadding="10"
//         >

//           <thead>

//             <tr>
//               <th>User</th>
//               <th>Email</th>
//               <th>Rating</th>
//             </tr>

//           </thead>

//           <tbody>

//             {data.ratings.map(
//               (item) => (

//               <tr
//                 key={item._id}
//               >

//                 <td>
//                   {item.user.name}
//                 </td>

//                 <td>
//                   {item.user.email}
//                 </td>

//                 <td>
//                   {item.rating}
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await API.get(
        "/owner/dashboard"
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-50 p-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Owner Dashboard
          </h1>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div className="bg-blue-600 text-white rounded-xl shadow p-6">
              <h3 className="text-lg">
                Store Name
              </h3>

              <p className="text-2xl font-bold mt-2">
                {data.storeName}
              </p>
            </div>

            <div className="bg-blue-900 text-white rounded-xl shadow p-6">
              <h3 className="text-lg">
                Average Rating
              </h3>

              <p className="text-2xl font-bold mt-2">
                ⭐ {data.averageRating}
              </p>
            </div>

          </div>

          {/* Ratings Table */}
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-x-auto">

            <div className="p-4 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-blue-700">
                User Ratings
              </h2>
            </div>

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">
                    User
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-center">
                    Rating
                  </th>
                </tr>

              </thead>

              <tbody>

                {data.ratings.length > 0 ? (
                  data.ratings.map(
                    (item) => (
                      <tr
                        key={item._id}
                        className="border-t hover:bg-blue-50"
                      >
                        <td className="p-4">
                          {item.user.name}
                        </td>

                        <td className="p-4">
                          {item.user.email}
                        </td>

                        <td className="p-4 text-center font-semibold">
                          {item.rating}
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="p-6 text-center text-gray-500"
                    >
                      No ratings available.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </>
  );
}