import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route
              exact
              path='/productListing'
              element={<ProductListingPage />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
