import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./features/all-products/Products";
import Product from "./features/all-products/Product";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        // loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/products/:id",
        element: <Product />,
        // action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
