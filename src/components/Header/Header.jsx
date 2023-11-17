import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
//import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import {Link, withRouter} from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Header = (props) => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

   

    const renderCartItemsCount = () => (
        <CartContext.Consumer>
          {value => {
            const {cartList} = value
            const cartItemsCount = cartList.length
    
            return (
              <>
                {cartItemsCount > 0 && (
                  <span className="cart-count-badge">{cartList.length}</span>
                )}
              </>
            )
          }}
        </CartContext.Consumer>
      )
    return (
        <>
            <header className={`main-header`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About </li>
                        <li onClick={() => navigate("/categories/")}> Category</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>AKSHAY</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart onClick={() => navigate("/orderagain/")} />
                        <Link to="/cart" className="nav-link" style={{ color: 'White'}}>
                            <li className="nav-menu-item">
                            <CgShoppingCart />
                                {renderCartItemsCount()}
                            </li>
                        </Link>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )

};

export default Header;
