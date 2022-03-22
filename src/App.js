import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Auth/Signup";
import Mockman from "mockman-js";
import Login from "./components/Auth/Login";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productListing' element={<ProductListingPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mockman' element={<Mockman />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
