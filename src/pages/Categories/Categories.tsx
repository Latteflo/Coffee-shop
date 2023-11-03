import { FC, useState } from "react"
import "font-awesome/css/font-awesome.min.css"
import "../../index.css"
import "./categories.css"
import { Link, useNavigate } from "react-router-dom"

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
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate(`/search-results?q=${searchQuery}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <section className="categories-cards">
        <div className="search-container">
          <h3>Browse by coffee types, brand or special offer!</h3>
          <div className="hero-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Icon className="fa fa-search" onClick={handleSearch} />
          </div>
        </div>
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
            <Link to="/products/expresso">
              <h4>Expresso</h4>
            </Link>{" "}
            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
          <div
            className="card cappucino"
            onMouseEnter={() =>
              setCurrentBackground("../../assets/images/coffeeee.png")
            }
            onMouseLeave={() => setCurrentBackground("")}
          >
            <Link to="/products/cappucino">
              <h4>Cappucino</h4>
            </Link>

            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
          <div
            className="card latte"
            onMouseEnter={() =>
              setCurrentBackground("../../assets/images/coffeeee.png")
            }
            onMouseLeave={() => setCurrentBackground("")}
          >
            <Link to="/products/latte">
              <h4>Latte</h4>
            </Link>

            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
          <div
            className="card cold-brew"
            onMouseEnter={() =>
              setCurrentBackground("../../assets/images/coffeeee.png")
            }
            onMouseLeave={() => setCurrentBackground("")}
          >
            <Link to="/products/cold-brew">
              <h4>Cold-brew</h4>
            </Link>

            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
          <div
            className="card iced-coffee"
            onMouseEnter={() =>
              setCurrentBackground("../../assets/images/coffeeee.png")
            }
            onMouseLeave={() => setCurrentBackground("")}
          >
            <Link to="/products/iced-coffee">
              <h4>Iced-Coffee</h4>
            </Link>

            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
          <div
            className="card coffee-beans"
            onMouseEnter={() =>
              setCurrentBackground("../../assets/images/coffeeee.png")
            }
            onMouseLeave={() => setCurrentBackground("")}
          >
            <Link to="/products/coffee-beans">
              <h4>Coffee-Beans</h4>
            </Link>

            <img src="../../assets/images/coffeeee.png" alt="coffee" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
