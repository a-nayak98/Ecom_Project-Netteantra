import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import LogInPage from "./pages/LogInPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/navbar.css";
import "./styles/products.css";
import "./styles/responsive.css";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/product" element={<SingleProductPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
