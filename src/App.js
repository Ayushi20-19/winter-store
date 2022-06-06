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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Errorpage from "./components/Utiles/404errorpage";
function App() {
  return (
    <>
      <div className='App'>
        <ToastContainer
          position='top-right'
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
