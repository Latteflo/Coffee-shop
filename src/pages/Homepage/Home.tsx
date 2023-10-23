import React, { FC } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../../components/Scene/Scene"
import "font-awesome/css/font-awesome.min.css"
import "../../index"
import "./hero.css"


type IconProps = {
  className: string
  ariaHidden?: boolean
  onClick?: () => void
}

const Icon: FC<IconProps> = ({ className, ariaHidden = true, onClick }) => {
  return (
    <i className={className} aria-hidden={ariaHidden} onClick={onClick}></i>
  )
}

const Home: FC = () => {
  const handleSearch = () => {
    //Handle search functionality
  }

  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Discover the finest local coffee shop</h1>
        <h3>Browse by coffee types, brand or special offer!</h3>
        <div className="hero-search">
          <input type="text" className="search-input" placeholder="Search" />
          <Icon className="fa fa-search" onClick={handleSearch} />
        </div>
      </div>
      <div className="coffee-cup">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </section>
  )
}
export default Home
