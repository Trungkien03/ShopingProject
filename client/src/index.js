import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//product provider
import ProductProvider from "./contexts/ProductContext";
//sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// cart provider
import CartProvider from "./contexts/CartContext";
// category Provider
import { CategoryProvider } from "./contexts/CategoryContext";
// import AuthContext
import { AuthContextProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SidebarProvider>
      <CartProvider>
        <CategoryProvider>
          <ProductProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ProductProvider>
        </CategoryProvider>
      </CartProvider>
    </SidebarProvider>
  </AuthContextProvider>
);
