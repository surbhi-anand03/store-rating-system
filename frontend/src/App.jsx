import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import AdminStores from "./pages/admin/Stores";

import UserStores from "./pages/user/Stores";

import OwnerDashboard from "./pages/owner/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import UserDetails
from "./pages/admin/UserDetails";

import CreateUser from "./pages/admin/CreateUser";
import CreateStore from "./pages/admin/CreateStore";
import ChangePassword from "./pages/ChangePassword";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/stores"
          element={
            <ProtectedRoute role="admin">
              <AdminStores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-user"
          element={
            <ProtectedRoute role="admin">
              <CreateUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-store"
          element={
            <ProtectedRoute role="admin">
              <CreateStore />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute role="admin">
              <UserDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stores"
          element={
            <ProtectedRoute role="user">
              <UserStores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/dashboard"
          element={
            <ProtectedRoute role="owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;