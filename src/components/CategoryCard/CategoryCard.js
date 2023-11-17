//import { useNavigate } from "react-router-dom";
//import Category from "../Category/Category";
//import CartContext from '../../context/CartContext'
import "./CategoryCard.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
    const { details } = props
    const { img, name, id } = details
    return (
        <div className="category" >
            <Link to={`/category/${id}`} id={id} >
                <img src={img} alt="" />
            </Link>
            <span>{name}</span>
        </div>
    )
}

export default CategoryCard