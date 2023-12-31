import React, { useState, FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { useCart } from "../CartContext/CartContext";
import { useUser } from "../UserContext/UserContext";
import { signOut } from 'firebase/auth'; 
import { Auth } from "../../api/firebase"; 
import "font-awesome/css/font-awesome.min.css";
import "../../index.css";
import "./navbar.css";

type IconProps = {
  className: string;
  ariaHidden?: boolean;
  onClick?: () => void;
};

const Icon: FC<IconProps> = ({ className, ariaHidden = true, onClick }) => {
  return (
    <i className={className} aria-hidden={ariaHidden} onClick={onClick}></i>
  );
};

const NavBar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState(false);
  const { quantity } = useCart();
  const { user } = useUser();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleToggle = (): void => {
    setToggleMenu(!toggleMenu);
  };

  const handleSearchIconClick = (): void => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleUserClick = () => {
    if (user) {
      navigate("/profile"); 
    } else {
      setShowLogin(true); 
    }
  };

  const logOut = async () => {
    try {
      await signOut(Auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const userMenu = user ? (
    <div className="user-menu">
      <div className="user-options">
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  ) : (
    <button onClick={() => setShowLogin(true)}>Login</button>
  );

  const handleCartClick = () => {
    navigate('/checkout'); 
  };

  return (
    <nav className="nav">
      <img src="../assets/images/logo.png" alt="logo" className="logo" />
      <div className="right-side">
        <ul className={`menu ${toggleMenu ? "active" : ""}`}>
          <li className={currentPath === "/" ? "active" : ""}>
            <Link to="/" onClick={() => setToggleMenu(false)}>
              Home
            </Link>
          </li>
          <li className={currentPath === "/about" ? "active" : ""}>
            <Link to="/about" onClick={() => setToggleMenu(false)}>
              About
            </Link>
          </li>
          <li className={currentPath === "/categories" ? "active" : ""}>
            <Link to="/categories" onClick={() => setToggleMenu(false)}>
              Categories
            </Link>
          </li>
          <li className={currentPath === "/blog" ? "active" : ""}>
            <Link to="/blog" onClick={() => setToggleMenu(false)}>
              Blog
            </Link>
          </li>
          <li className={currentPath === "/contact" ? "active" : ""}>
            <Link to="/contact" onClick={() => setToggleMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="left-side">
        <svg
          className={`ham hamRotate ham1 ${toggleMenu ? "active" : ""}`}
          onClick={handleToggle}
          viewBox="0 0 100 100"
          width="40"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
        <div className="icons">
          <div className={`search ${isSearchOpen ? "search-open" : ""}`}>
            {isSearchOpen && (
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            )}
            <Icon className="fa fa-search" onClick={handleSearchIconClick} />
          </div>
          <Link to="/cart" className="cart-icon-link">
          <div className="cart-icon-link" onClick={handleCartClick}>
          {quantity > 0 && <span className="cart-quantity">{quantity}</span>}
          <Icon className="fa fa-shopping-basket" aria-label="View Cart" />
          </div>
          </Link>
          <i className="fa fa-user" onClick={handleUserClick}></i>
        </div>
      </div>
      {userMenu}
      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
    </nav>    
  )
}

export default NavBar
