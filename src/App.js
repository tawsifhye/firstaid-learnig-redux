import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataProvider from "./Context/DataProvider";
import Home from "./Components/Home/Home";
import CourseOverview from "./Components/CourseOverview/CourseOverview";
import QuizHome from "./Components/Quiz/QuizHome";
import CartHome from "./Components/Cart/CartHome";
import AuthProvider from "./Context/AuthProvider";
import QUizResult from "./Components/Quiz/QuizResult";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='courseoverview/:id' element={<CourseOverview />} />
              <Route path='quiz' element={<QuizHome />} />
              <Route path='result' element={<QUizResult />} />
              <Route path='cart' element={<CartHome />} />
            </Routes>
            <Footer />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
