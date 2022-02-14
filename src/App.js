import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";

function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <Home />
        <Footer />
      </DataProvider>

    </div>
  );
}

export default App;
