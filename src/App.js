import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import ProductDetail from "./Components/ProductDetail";
import ShowCartItems from "./Components/ShowCartItems";
import CheckoutPage from "./Components/CheckoutPage";
import Delivered from "./Components/Delivered";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />

        <Route exact path="/checkout-page" element={<CheckoutPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<ShowCartItems />} />
        <Route exact path="/delivered" element={<Delivered />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
