import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/all-products/Products";
import ProductPage from "./pages/Product/ProductPage";
import Cart from "./pages/cart/Cart";
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
        element: <ProductPage />,
        // action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
