import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import Navbar from "./components/NavBar/Navbar";
import Signup from "./components/Auth/Signup";
import Mockman from "mockman-js";
import Login from "./components/Auth/Login";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import SingleProductPage from "./pages/SingleProductPage";
function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productListing' element={<ProductListingPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mockman' element={<Mockman />}></Route>
          <Route
            path='productListing/:productId'
            element={<SingleProductPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
