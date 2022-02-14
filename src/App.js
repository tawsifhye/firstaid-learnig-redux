import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";
import CourseOverview from "./Components/shared/CourseOverview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='courseoverview/:id' element={<CourseOverview />} />
          </Routes>
          <Home />

          <Footer />
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
