import Product from "../pages/product";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ShoppingCart from "../pages/ShoppingCart";

const routes = [
  {
    path: "/",
    title: "Product",
    component: <Product/>,
  },
  {
    path: "/ProductDetailsPage",
    title: "ProductDetailsPage",
    component: <ProductDetailsPage />,
  },
 
  {
    path: "/ShoppingCart",
    title: "ShoppingCart",
    component: <ShoppingCart/>,
  },
];

export default routes;