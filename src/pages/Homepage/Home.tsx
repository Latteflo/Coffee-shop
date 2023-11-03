import { FC } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../../components/Scene/Scene"
import About from "../About/About"
//import Categories from "../Categories/Categories"
import CircularText from "../../components/CircularText/CircularText"
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
          <h1>
          <CircularText text="Discover the best coffee ~" />
          </h1>
          <Canvas>
            <Scene />
          </Canvas>
        </div>
      </section>
      <About />
      <Contact />
      <Blog/> 
      {/*<Categories />*/}
    </>
  )
}
export default Home
