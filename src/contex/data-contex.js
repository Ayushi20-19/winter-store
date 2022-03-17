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
    sortBy: "",
    filters: {
      filterByCategories: [],
      filterByBrands: [],
      includeOutOfStock: false,
      fastDelivery: true,
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
  useEffect(() => {
    fetchData();
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
