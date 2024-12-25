import CourseCurriculum from "./components/CourseCurriculum";
import HeroSection from "./components/HeroSection";
import ReelSection from "./components/ReelSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ReelSection />  
      <CourseCurriculum />
      <Testimonial />
      <div className="h-screen"></div>    
    </div>
  );
}

export default App;
