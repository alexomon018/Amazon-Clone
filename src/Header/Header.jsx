import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SerachIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {

  const [{basket,user}] = useStateValue();
  console.log(basket);

  const login = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SerachIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
  <span className="header__optionLineTwo">{user ? "sigh Out" : "Signt In"}</span>
          </div>
        </Link>

        <Link to={!!user && "/login"} className="header__link">
          <div onClick={login}  className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShopingBasketIcon />
  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
