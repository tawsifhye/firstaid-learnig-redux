import DataProvider from "./Components/Context/DataProvider";
import Courses from "./Components/Courses";
import FreeResources from "./Components/FreeResources";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TipsSection from "./Components/TipsSection";

function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <Hero />
        <Courses />
        <FreeResources />
        <TipsSection />
      </DataProvider>

    </div>
  );
}

export default App;
