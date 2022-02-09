import DataProvider from "./Components/Context/DataProvider";
import Courses from "./Components/Courses";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <Hero />
        <Courses />
      </DataProvider>

    </div>
  );
}

export default App;
