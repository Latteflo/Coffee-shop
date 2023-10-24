import  { FC, useState } from "react"
import "font-awesome/css/font-awesome.min.css"
import "../../index.css"
import "./categories.css"
import OnlineShop from "../OnlineShop/OnlineShop"

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

const Categories: FC = () => {
  const [currentBackground, setCurrentBackground] = useState("")

  const handleSearch = () => {
    //Handle search functionality
  }

  return (
    <>
    <section className="categories-cards">
      <div className="search-container">
        <h3>Browse by coffee types, brand or special offer!</h3>
        <div className="hero-search">
          <input type="text" className="search-input" placeholder="Search" />
          <Icon className="fa fa-search" onClick={handleSearch} />
        </div>
      </div>
      <h2>Categories</h2>
      <div
        className="card-collection"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <div
          className="card expresso"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Expresso</h4>
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
        <div
          className="card cappucino"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Cappucino</h4>{" "}
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
        <div
          className="card latte"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Latte</h4>
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
        <div
          className="card cold-brew"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Cold-brew</h4>
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
        <div
          className="card iced-coffee"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Iced-Coffee</h4>
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
        <div
          className="card coffee-beans"
          onMouseEnter={() =>
            setCurrentBackground("../../assets/images/coffeeee.png")
          }
          onMouseLeave={() => setCurrentBackground("")}
        >
          <h4>Coffee-Beans</h4>
          <img src="../../assets/images/coffeeee.png" alt="coffee" />
        </div>
      </div>
    </section>
    <OnlineShop/>
    </>
  )
}

export default Categories
