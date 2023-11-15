import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/Navigation/NavBar"
import Home from "./pages/Homepage/Home"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"
import NotFound from "./pages/NotFound/NotFound"
import Categories from "./pages/Categories/Categories"
import ProductDetails from "./pages/ProductDetail/ProductDetails"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { UserProvider } from "./components/UserContext/UserContext"
import { ProductsProvider } from "./components/ProductsContext/ProductsContext"
import { CartProvider } from "./components/CartContext/CartContext"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import "./App.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY || "")

const ProductDetailsWithStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <ProductDetails />
    </Elements>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <CartProvider>
          <ProductsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/product/:id"
                element={<ProductDetailsWithStripe />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>{" "}
          </ProductsProvider>
        </CartProvider>
      </UserProvider>
      <Footer />
    </Router>
  )
}

export default App
