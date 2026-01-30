import React from "react";
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CourseSearchSection from "../components/CourseSearchSection";
import BenefitsSection from "../components/BenifitsSection";
import PopularCoursesSection from "../components/PopularCoursesSection";
import InstructorCTASection from "../components/InstructorCTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterCTASection from "../components/NewsletterSection";



function LandingPage() {
  return (
    <>
      <HeroSection/>
      <CourseSearchSection/>
      <BenefitsSection/>
      <PopularCoursesSection/>
      <InstructorCTASection/>
      <TestimonialsSection/>
      <NewsletterCTASection/>
    </>
  );
}

export default LandingPage;
