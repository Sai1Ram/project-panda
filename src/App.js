import CourseCurriculum from "./components/CourseCurriculum";
import HeroSection from "./components/HeroSection";
import ReelSection from "./components/ReelSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ReelSection />  
      <CourseCurriculum />
      <div className="h-screen"></div>    
    </div>
  );
}

export default App;
