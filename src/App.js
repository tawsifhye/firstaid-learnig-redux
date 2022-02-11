import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import Navbar from "./Components/shared/Navbar";

function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <Home />

      </DataProvider>

    </div>
  );
}

export default App;
