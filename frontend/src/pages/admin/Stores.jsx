import { useEffect, useState } from "react";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function Stores() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  const [sort, setSort] =
    useState("name");

  const [order, setOrder] =
    useState("asc");

  useEffect(() => {
    loadStores();
  }, [
    search,
    sort,
    order
  ]);

  const loadStores = async () => {
    try {
      const res = await API.get(
        `/admin/stores?search=${search}&sort=${sort}&order=${order}`
      );

      setStores(res.data);
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
              Store Management
            </h1>

            <p className="text-slate-500 mt-2">
              View and manage all registered stores
            </p>
          </div>

          {/* Search Section */}
          {/* <div className="bg-white rounded-xl shadow-md p-5 mb-6">
            <div className="flex flex-col md:flex-row gap-3">

              <input
                type="text"
                placeholder="Search by store name or address..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={loadStores}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Search
              </button>

            </div>
          </div> */}

          <div className="bg-white rounded-xl shadow-md p-5 mb-6">

  <div className="grid md:grid-cols-4 gap-4">

    <input
      type="text"
      placeholder="Search by store name or address..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
        border
        border-slate-300
        rounded-lg
        px-4
        py-3
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />

    <select
      value={sort}
      onChange={(e) =>
        setSort(e.target.value)
      }
      className="
        border
        border-slate-300
        rounded-lg
        px-4
        py-3
      "
    >
      <option value="name">
        Sort By Name
      </option>

      <option value="email">
        Sort By Email
      </option>

      <option value="averageRating">
        Sort By Rating
      </option>
    </select>

    <select
      value={order}
      onChange={(e) =>
        setOrder(e.target.value)
      }
      className="
        border
        border-slate-300
        rounded-lg
        px-4
        py-3
      "
    >
      <option value="asc">
        Ascending
      </option>

      <option value="desc">
        Descending
      </option>
    </select>

    <button
      onClick={loadStores}
      className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        rounded-lg
        py-3
        font-medium
      "
    >
      Search
    </button>

  </div>

</div>

          {/* Table Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">
                All Stores
              </h2>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-blue-600 text-white">

                  <tr>
                    <th className="px-6 py-4 text-left">
                      Store Name
                    </th>

                    <th className="px-6 py-4 text-left">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left">
                      Address
                    </th>

                    <th className="px-6 py-4 text-left">
                      Owner
                    </th>

                    <th className="px-6 py-4 text-center">
                      Rating
                    </th>
                  </tr>

                </thead>

                <tbody>

                  {stores.length > 0 ? (
                    stores.map((store) => (
                      <tr
                        key={store._id}
                        className="border-b hover:bg-slate-50 transition"
                      >
                        <td className="px-6 py-4 font-medium">
                          {store.name}
                        </td>

                        <td className="px-6 py-4">
                          {store.email}
                        </td>

                        <td className="px-6 py-4">
                          {store.address}
                        </td>

                        <td className="px-6 py-4">
                          {store.owner?.name || "N/A"}
                        </td>

                        <td className="px-6 py-4 text-center">

                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold
                            ${
                              store.averageRating >= 4
                                ? "bg-green-100 text-green-700"
                                : store.averageRating >= 3
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            ⭐ {store.averageRating || 0}
                          </span>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-8 text-slate-500"
                      >
                        No stores found
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
              Total Stores
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {stores.length}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}