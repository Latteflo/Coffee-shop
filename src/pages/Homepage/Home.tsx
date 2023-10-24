import { FC } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../../components/Scene/Scene"
import About from "../About/About"
import Categories from "../Categories/Categories"
import "font-awesome/css/font-awesome.min.css"
import "../../index"
import "./hero.css"

const Home: FC = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-text">
          <h1>
            Discover the finest <span>coffee</span> shop
          </h1>
        </div>
        <div className="coffee-cup">
          <Canvas>
            <Scene />
          </Canvas>
        </div>
      </section>
      <About />
      <Categories/>
    </>
  )
}
export default Home
