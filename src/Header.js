import React from "react";
import "./Header.css";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import amazon_logo from "./pictures/amazon.png";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__lineOne">
        <Link to="/" className="header__logoLink">
          <img className="header__logoImg" alt="" src={amazon_logo} />
        </Link>

        <LocationOnOutlinedIcon className="header__location" />
        <div className="header__option">
          <span className="header__optionLineOne darker">Deliver to</span>
          <span className="header__optionLineTwo">Pakistan</span>
        </div>

        <div className="header__search">
          <ArrowDropDownIcon className="header__dropdown" />
          <input className="header__searchInput" type="text" />
          {/* logo */}
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__navOne">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email.match(".+@") : ""},
                {user ? " Sign Out" : " Sign In"}
              </span>
              <span className="header__optionLineTwo">Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__lineTwo">
        <div className="header__navTwo">
          <div className="header__optionTwo heavy">
            <ReorderRoundedIcon className="header__options" />
            All
          </div>
          <div className="header__optionTwo">Today's Deal</div>
          <div className="header__optionTwo">Customer Service</div>
          <div className="header__optionTwo">Registry</div>
          <div className="header__optionTwo">Gift Cards</div>
          <div className="header__optionTwo">Sell</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
