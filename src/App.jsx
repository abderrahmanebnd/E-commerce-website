import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./pages/Product/ProductPage";
import Cart from "./pages/cart/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/all-products/AllProducts";
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
        element: <AllProducts />,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/products/:id",
        element: <ProductPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
