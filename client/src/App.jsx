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
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
