import { FC } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../../components/Scene/Scene"
import About from "../About/About"
//import Categories from "../Categories/Categories"
//import CircularText from "../../components/CircularText/CircularText"
import "font-awesome/css/font-awesome.min.css"
import "../../index"
import "./hero.css"
import Contact from "../Contact/Contact"
import Blog from "../Blog/Blog"
import OnlineShop from "../OnlineShop/OnlineShop"

const Home: FC = () => {
  return (
    <>
      <section className="hero-container">
        <div className="coffee-cup">
          <div className="headline-container">
            <div className="text-behind">MORNING HAMONY</div>
            <div className="text-behind-blur">MORNING HAMONY</div>
            <div className="text-front">MORNING HAMONY</div>
            {/*<h1> Love, Latte, Mocha & Comfort</h1>*/}
          </div>
          <Canvas>
            <Scene />
          </Canvas>
          <div className="scroll">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        </div>
      </section>
      <About />
      <OnlineShop />
      <Contact />
      <Blog />
      {/*<Categories />*/}
    </>
  )
}
export default Home
