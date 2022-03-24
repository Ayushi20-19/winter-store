import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { DataReducer } from "../reducer/DataReducer";

const ProductData = createContext();

const ProductDataProvider = ({ children }) => {
  const initialState = {
    products: [],
    categories: [],
    cartItem: [],
    priceRange: "",
    sortBy: "",
    filters: {
      filterByCategories: [],
      OutOfStock: false,
      fastDelivery: false,
    },
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchData = async () => {
    try {
      await axios.get("/api/products").then((response) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: response.data.products,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      await axios.get("/api/categories").then((response) => {
        dispatch({
          type: "GET_CATEGORIES",
          payload: response.data.categories,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  return (
    <ProductData.Provider value={{ state, dispatch }}>
      {children}
    </ProductData.Provider>
  );
};

//custom hook
const useDataContex = () => useContext(ProductData);
export { ProductDataProvider, useDataContex };
