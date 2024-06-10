import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./Components/Partials/Loader";
import PageTitle from "./Components/PageTitle";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/product";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
      exct    path="/"
          index
          element={
            <>
              <PageTitle title="Product" />
              <Product />
            </>
          }
        />
   


          <Route
          path="/ProductDetailsPage/:id"
          index
          element={
            <>
              <PageTitle title="ProductDetailsPage" />
              
              <ProductDetailsPage Product={Product} />
            </>
          }
        />
        <Route
         path="/cart"
          element={
            <>
              <PageTitle title="ShoppingCart" />
              <ShoppingCart />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;