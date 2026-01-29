import React from "react";
import './index.css'   
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./components/Dashboard";
import Header from "./website/Header";
import HeroSection from "./website/HeroSection";
import CourseSearchSection from "./website/CourseSearchSection";
import BenefitsSection from "./website/BenifitsSection";
import PopularCoursesSection from "./website/PopularCoursesSection";
import InstructorCTASection from "./website/InstructorCTASection";
import TestimonialsSection from "./website/TestimonialsSection";
import NewsletterSection from "./website/NewsletterSection";
import Footer from "./website/Footer";
import Login from "./website/Login";
import Register from "./website/Regster";
import AdminDashboard from "./website/AdminDashboard";
import CoursesPage from "./website/CoursePage";
import InstructorsPage from "./website/InstructorsPage";
import OffersPage from "./website/OffersPage";
import ContactPage from "./website/ContactPage";

function App() {
  return (
    <Router>
      <Header/>
      <HeroSection/>
      <CourseSearchSection/>
      <BenefitsSection/>
      <PopularCoursesSection/>
      <InstructorCTASection/>
      <TestimonialsSection/>
      <NewsletterSection/>
      <Footer/>
      <Login/>
      <Register/>
      <AdminDashboard/>
      <CoursesPage/>
      <InstructorsPage/>
      <OffersPage/>
      <ContactPage/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
