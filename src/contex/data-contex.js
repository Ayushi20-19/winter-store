import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { DataReducer } from "../reducer/DataReducer";

const ProductData = createContext();

const ProductDataProvider = ({ children }) => {
  // const [productData, setProductData] = useState();
  // const fetchData = async () => {
  //   await axios.get("/api/products").then((response) => {
  //     //   console.log(response.data.products),
  //     setProductData(response.data.products);
  //   });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.warn("jdbkhs");
  // const [state, dispatch] = useReducer(DataReducer, DataReducer);
  const initialState = {
    products: [],
    categories: [],
    sortBy: "",
    filters: {
      filterByCategories: [],
      includeOutOfStock: false,
      fastDelivery: false,
    },
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);
  const fetchData = async () => {
    try {
      await axios.get("/api/products").then((response) => {
        // console.log(response.data.products),
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
        console.log("Response from  ategor axios", response);
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
  console.log("data", state);

  return (
    <ProductData.Provider value={{ state, dispatch }}>
      {children}
    </ProductData.Provider>
  );
};

//custom hook
const useDataContex = () => useContext(ProductData);
export { ProductDataProvider, useDataContex };
