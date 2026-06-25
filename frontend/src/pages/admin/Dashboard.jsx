import { useEffect, useState } from "react";
import API from "../../api/api";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await API.get("/admin/dashboard");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white p-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-blue-700 mb-8">
            Admin Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Total Users */}
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium">
                Total Users
              </h3>

              <p className="text-4xl font-bold mt-3">
                {stats.totalUsers}
              </p>
            </div>

            {/* Total Stores */}
            <div className="bg-indigo-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium">
                Total Stores
              </h3>

              <p className="text-4xl font-bold mt-3">
                {stats.totalStores}
              </p>
            </div>

            {/* Total Ratings */}
            <div className="bg-blue-800 text-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium">
                Total Ratings
              </h3>

              <p className="text-4xl font-bold mt-3">
                {stats.totalRatings}
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}