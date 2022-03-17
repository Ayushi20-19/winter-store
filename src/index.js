import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductDataProvider } from "./contex/data-contex";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductDataProvider>
      <App />
    </ProductDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
