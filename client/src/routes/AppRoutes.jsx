import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserListPage from "../pages/UserListPage";
import UserDetailPage from "../pages/UserDetailPage";
import CreateUserPage from "../pages/CreateUserPage";
import EditUserPage from "../pages/EditUserPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../components/Home";

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    {/* Admin-only routes */}
    <Route
      path="/users"
      element={
        <ProtectedRoute adminOnly>
          <UserListPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/users/create"
      element={
        <ProtectedRoute adminOnly>
          <CreateUserPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/users/edit/:id"
      element={
        <ProtectedRoute adminOnly>
          <EditUserPage />
        </ProtectedRoute>
      }
    />

    {/* Owner or admin route */}
    <Route
      path="/users/:id"
      element={
        <ProtectedRoute ownerOrAdmin>
          <UserDetailPage />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
