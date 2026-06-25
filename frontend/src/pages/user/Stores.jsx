// import { useEffect, useState } from "react";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";

// export default function Stores() {

//   const [stores, setStores] =
//     useState([]);

//   const [ratings, setRatings] =
//     useState({});
    
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//   loadStores();
// }, [search]);

//   const loadStores =
//   async () => {

//     try {

//       const res =
//         await API.get(
//           `/stores?search=${search}`
//         );

//       setStores(res.data);

//     } catch (error) {

//       console.log(error);

//     }
//   };

//   const submitRating =
//     async (storeId) => {

//       const value =
//         Number(
//           ratings[storeId]
//         );

//       if (
//         value < 1 ||
//         value > 5
//       ) {
//         alert(
//           "Rating must be between 1 and 5"
//         );

//         return;
//       }

//     try {

//       await API.post(
//         "/ratings",
//         {
//           storeId,
//           rating:
//             Number(
//               ratings[storeId]
//             )
//         }
//       );

//       alert(
//         "Rating Submitted"
//       );

//       loadStores();

//     } catch (error) {

//       alert(
//         error.response.data.message
//       );

//     }
//   };

//   const updateRating =
//     async (storeId) => {

//       const value =
//         Number(
//           ratings[storeId]
//         );

//       if (
//         value < 1 ||
//         value > 5
//       ) {
//         alert(
//           "Rating must be between 1 and 5"
//         );

//         return;
//       }

//       try {

//       await API.put(
//         `/ratings/${storeId}`,
//         {
//           rating:
//             Number(
//               ratings[storeId]
//             )
//         }
//       );

//       alert(
//         "Rating Updated"
//       );

//       loadStores();

//     } catch (error) {

//       alert(
//         error?.response?.data?.message ||
//         "Something went wrong"
//       );

//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div
//         style={{
//           padding: "20px"
//         }}
//       >

//         <h1>
//           Stores
//         </h1>

//         <div
//           style={{
//             marginBottom: "20px",
//             display: "flex",
//             gap: "10px"
//           }}
//         >

//           <input
//             type="text"
//             placeholder="Search Store"
//             value={search}
//             onChange={(e) =>
//               setSearch(
//                 e.target.value
//               )
//             }
//           />

//           <button
//             onClick={loadStores}
//           >
//             Search
//           </button>

//         </div>

//         <table
//           border="1"
//           cellPadding="10"
//         >

//           <thead>

//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Average Rating</th>
//               <th>My Rating</th>
//               <th>Action</th>
//             </tr>

//           </thead>

//           <tbody>

//             {stores.map(
//               (store) => (

//               <tr
//                 key={store._id}
//               >

//                 <td>
//                   {store.name}
//                 </td>

//                 <td>
//                   {store.address}
//                 </td>

//                 <td>
//                   {store.averageRating}
//                 </td>

//                 <td>
//                   {store.userRating ||
//                     "Not Rated"}
//                 </td>

//                 <td>

//                   <input
//                     type="number"
//                     min="1"
//                     max="5"
//                     value={
//                       ratings[
//                         store._id
//                       ] || ""
//                     }
//                     onChange={(e) =>
//                       setRatings({
//                         ...ratings,
//                         [store._id]:
//                           e.target.value
//                       })
//                     }
//                   />

//                   {" "}

//                   {!store.userRating ? (

//                     <button
//                       onClick={() =>
//                         submitRating(
//                           store._id
//                         )
//                       }
//                     >
//                       Submit
//                     </button>

//                   ) : (

//                     <button
//                       onClick={() =>
//                         updateRating(
//                           store._id
//                         )
//                       }
//                     >
//                       Update
//                     </button>

//                   )}

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

export default function Stores() {
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStores();
  }, [search]);

  const loadStores = async () => {
    try {
      const res = await API.get(
        `/stores?search=${search}`
      );

      setStores(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitRating = async (storeId) => {
    const value = Number(
      ratings[storeId]
    );

    if (value < 1 || value > 5) {
      alert(
        "Rating must be between 1 and 5"
      );
      return;
    }

    try {
      await API.post("/ratings", {
        storeId,
        rating: value,
      });

      alert("Rating Submitted");
      loadStores();
    } catch (error) {
      alert(
        error?.response?.data?.message
      );
    }
  };

  const updateRating = async (storeId) => {
    const value = Number(
      ratings[storeId]
    );

    if (value < 1 || value > 5) {
      alert(
        "Rating must be between 1 and 5"
      );
      return;
    }

    try {
      await API.put(
        `/ratings/${storeId}`,
        {
          rating: value,
        }
      );

      alert("Rating Updated");
      loadStores();
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
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Stores
          </h1>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Search Store..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="border border-blue-300 rounded-lg px-4 py-2 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={loadStores}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-x-auto">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="p-4 text-left">
                    Store Name
                  </th>

                  <th className="p-4 text-left">
                    Address
                  </th>

                  <th className="p-4 text-center">
                    Average Rating
                  </th>

                  <th className="p-4 text-center">
                    My Rating
                  </th>

                  <th className="p-4 text-center">
                    Action
                  </th>
                </tr>

              </thead>

              <tbody>

                {stores.map(
                  (store) => (

                  <tr
                    key={store._id}
                    className="border-t hover:bg-blue-50"
                  >

                    <td className="p-4 font-medium">
                      {store.name}
                    </td>

                    <td className="p-4">
                      {store.address}
                    </td>

                    <td className="p-4 text-center">
                      {store.averageRating}
                    </td>

                    <td className="p-4 text-center">
                      {store.userRating ||
                        "Not Rated"}
                    </td>

                    <td className="p-4">

                      <div className="flex justify-center items-center gap-2">

                        <input
                          type="number"
                          min="1"
                          max="5"
                          placeholder="1-5"
                          value={
                            ratings[
                              store._id
                            ] || ""
                          }
                          onChange={(e) =>
                            setRatings({
                              ...ratings,
                              [store._id]:
                                e.target.value,
                            })
                          }
                          className="w-20 border border-blue-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {!store.userRating ? (

                          <button
                            onClick={() =>
                              submitRating(
                                store._id
                              )
                            }
                            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                          >
                            Submit
                          </button>

                        ) : (

                          <button
                            onClick={() =>
                              updateRating(
                                store._id
                              )
                            }
                            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                          >
                            Update
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))}

                {stores.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center p-8 text-gray-500"
                    >
                      No stores found
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