import CourseCurriculum from "./components/CourseCurriculum";
import CourseLearn from "./components/CourseLearn";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Mentor from "./components/Mentor";
import ReelSection from "./components/ReelSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App relative">
      <HeroSection />
      <ReelSection />  
      <CourseCurriculum />
      <Mentor />
      {/* <Testimonial /> */}
      <CourseLearn />
      <div className="h-screen"></div>  
      <Footer />  
    </div>
  );
}

export default App;
