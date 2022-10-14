import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useStateValue } from './StateProvider';

function Header() {
  const [ { basket }, dispatch ] = useStateValue();
  console.log(basket)
  return (
    <nav className="header">

        <Link to='/'>
          <h1 className='header__logo'>FGC Merch Store</h1>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Huey</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
 
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">My</span>
              <span className="header__optionLineTwo">Merch</span>
            </div>
          </Link>

          <Link to='/checkout' className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header