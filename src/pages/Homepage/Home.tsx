import { FC } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../../components/Scene/Scene"
import About from "../About/About"
import "font-awesome/css/font-awesome.min.css"
import "../../index"
import "./hero.css"
import Contact from "../Contact/Contact"
import Blog from "../Blog/Blog"

const Home: FC = () => {
  return (
    <>
      <section className="hero-container">
        <div className="coffee-cup">
          <div className="headline-container">
            <div className="text-behind">MORNING HAMONY</div>
            <div className="text-behind-blur">MORNING HAMONY</div>
            <div className="text-front">MORNING HAMONY</div>
            <h1> Love, Latte, Mocha & Comfort</h1>
          </div>
          <Canvas>
            <Scene />
          </Canvas>
          <div className="scroll">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </section>
      <About />
      <Contact />
      <Blog />
      {/*<Categories />*/}
    </>
  )
}
export default Home
