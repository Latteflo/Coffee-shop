import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/Navigation/NavBar"
import Home from "./pages/Homepage/Home"
import About from "./pages/About/About"
import Categories from "./pages/Categories/Categories"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"
import NotFound from "./pages/NotFound/NotFound"
import OnlineShop from "./pages/OnlineShop/OnlineShop"
import ProductPage from "./pages/Product/ProductPage/ProductPage"
import ProductDetailPage from "./pages/Product/ProductDetailPage/ProductDetailPage"

import "./App.css"
import { ProductType } from "../types"

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/onlineShop" element={<OnlineShop />} />
        <Route path="/products" element={<ProductPage onAddToCart={function(product: ProductType): void {
          throw new Error("Function not implemented.")
        } } />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/*<Route path/>*/}
    </Router>
  )
}

export default App
