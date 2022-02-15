import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import CourseOverview from "./Components/CourseOverview/CourseOverview";
import QuizHome from "./Components/Quiz/QuizHome";
import CartHome from "./Components/Cart/CartHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='courseoverview/:id' element={<CourseOverview />} />
            <Route path='quiz' element={<QuizHome />} />
            <Route path='cart' element={<CartHome />} />
          </Routes>

        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
