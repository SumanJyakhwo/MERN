import { Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import LandingPage from "../pages/LandingPage";
import Footer from "../components/common/Footer";
import CoursesPage from "../pages/CoursePage";
import InstructorsPage from "../pages/InstructorsPage";
import OffersPage from "../pages/OffersPage";
import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import Register from "../pages/Regster";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";



export default function AppRoutes() {
  return (
    <Routes>
      {/* Public layout */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <LandingPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/courses"
        element={
          <>
            <Header />
            <CoursesPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/instructors"
        element={
          <>
            <Header />
            <InstructorsPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/offers"
        element={
          <>
            <Header />
            <OffersPage />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Header />
            <ContactPage />
            <Footer />
          </>
        }
      />

      {/* Auth (no header/footer) */}
      <Route 
      path="/login" 
      element={
        <>
        <Header/>
        <Login />
        <Footer/>
        </>
        } />
      <Route path="/register" element={<>
        <Header/>
        <Register />
        <Footer/>
        </>} />

      {/* Admin (protected) */}
      <Route
        path="/admin"
        element={
          <>
          <Header/>
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
          <Footer/>
          </>
        }
      />
      
      </Routes>
  );
}
