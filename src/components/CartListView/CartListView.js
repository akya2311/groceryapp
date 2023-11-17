import { Component } from 'react'

import Payment from '../Payment/Payment'
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartTotal/CartTotal'

import CartContext from '../../context/CartContext'

import './CartListView.css'

class CartListView extends Component {
    state = {
        isOrderPlaced: false,
        ownerList: []
    }
    orderPlaced = () => {
        this.setState(prevState => ({ isOrderPlaced: !prevState.isOrderPlaced }))
    }
    render() {
        const { isOrderPlaced } = this.state
        const { ownerList } = this.state
        return (
            <CartContext.Consumer>
                {value => {
                    const stringifiedCartList = localStorage.getItem('cartData')
                    const parsedCartList = JSON.parse(stringifiedCartList)
                    return isOrderPlaced ? (
                        <Payment />
                    ) : (
                        <div className="cart-content-container">
                            <div className="cart-headers-cont">
                                <p className="cart-header-items">Item</p>
                                <div className="qty-price-cont">
                                    <p className="cart-header-qty">Quantity</p>
                                    <p className="cart-header-price">Price</p>
                                </div>
                            </div>
                            <ul className="cart-list">
                                {parsedCartList.map(eachItem => (
                                    <CartItem
                                        key={eachItem.id}
                                        cartItem={eachItem}
                                        value={value}
                                    />
                                ))}
                            </ul>
                            <CartTotal orderPlaced={this.orderPlaced} />
                        </div>
                    )
                }}
            </CartContext.Consumer>

        )
    }
}

export default CartListView