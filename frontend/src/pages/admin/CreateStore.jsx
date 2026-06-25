
// import { useEffect, useState } from "react";
// import API from "../../api/api";
// import Navbar from "../../components/Navbar";

// export default function CreateStore() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     owner: "",
//   });

//   const [owners, setOwners] = useState([]);

//   useEffect(() => {
//     loadOwners();
//   }, []);

//   const loadOwners = async () => {
//     try {
//       const res = await API.get(
//         "/admin/users?role=owner"
//       );

//       setOwners(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post(
//         "/admin/stores",
//         form
//       );

//       alert(
//         "Store Created Successfully"
//       );

//       setForm({
//         name: "",
//         email: "",
//         address: "",
//         owner: "",
//       });
//     } catch (error) {
//       alert(
//         error?.response?.data
//           ?.message ||
//           "Failed to create store"
//       );
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-3xl mx-auto px-4 py-10">
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
//             Create Store
//           </h1>

//           <form
//             onSubmit={submit}
//             className="space-y-5"
//           >
//             <div>
//               <label className="block mb-2 font-medium text-gray-700">
//                 Store Name
//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Enter Store Name"
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium text-gray-700">
//                 Store Email
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Enter Store Email"
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium text-gray-700">
//                 Store Address
//               </label>

//               <textarea
//                 name="address"
//                 value={form.address}
//                 onChange={handleChange}
//                 placeholder="Enter Store Address"
//                 rows="4"
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 font-medium text-gray-700">
//                 Store Owner
//               </label>

//               <select
//                 name="owner"
//                 value={form.owner}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">
//                   Select Store Owner
//                 </option>

//                 {owners.map((owner) => (
//                   <option
//                     key={owner._id}
//                     value={owner._id}
//                   >
//                     {owner.name} (
//                     {owner.email})
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//             >
//               Create Store
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function CreateStore() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    owner: "",
  });

  const [owners, setOwners] = useState([]);

  useEffect(() => {
    loadOwners();
  }, []);

  const loadOwners = async () => {
    try {
      const res = await API.get(
        "/admin/users?role=owner"
      );

      setOwners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/admin/stores",
        form
      );

      alert(
        "Store Created Successfully"
      );

      setForm({
        name: "",
        email: "",
        address: "",
        owner: "",
      });
    } catch (error) {
      alert(
        error?.response?.data
          ?.message ||
          "Failed to create store"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Create Store
          </h1>

          <form
            onSubmit={submit}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Store Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Store Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Store Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Store Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Store Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter Store Address"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Store Owner
              </label>

              <select
                name="owner"
                value={form.owner}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select Store Owner
                </option>

                {owners.map((owner) => (
                  <option
                    key={owner._id}
                    value={owner._id}
                  >
                    {owner.name} (
                    {owner.email})
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Store
            </button>
          </form>
        </div>
      </div>
    </>
  );
}