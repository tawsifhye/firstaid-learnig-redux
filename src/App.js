import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import CourseOverview from "./Components/CourseOverview/CourseOverview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='courseoverview/:id' element={<CourseOverview />} />
          </Routes>

        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
