import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Authpage from "./pages/AuthPage";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productListing' element={<ProductListingPage />} />
          {/* <Route path='/auth' element={<Authpage />}>
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route> */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/mockman' element={<Mockman />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
