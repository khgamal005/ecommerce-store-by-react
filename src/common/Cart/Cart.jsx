import React from 'react'
import "./Style.css"

const Cart = ({ DataItems, AddToCart, Decrees, Delet }) => {

    const totalPrice = DataItems.reduce((total, item) => total + item.qty * item.price, 0)    /*to get result tootal price */

    return (
        <>
            <section className="cart-items">
                <div className="container d-flex">
                    <div className="cart-details">
                        {DataItems.length === 0 && <h1 className="no-items product">NO items her</h1>}
                        {DataItems.map((item) => {
                            const productQty = item.price * item.qty

                            return (
                                <div className="cart-list product item" key={item.id}>
                                    <div className="img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.title}</h3>
                                        <h4>
                                            {item.price}.0 * {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="cart-remove">
                                            <button className="cart-remove" onClick={() => Delet(item)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                        <div className="cartcontrol d-flex">
                                            <button className="incCart" onClick={() => AddToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className='desCart' onClick={() => Decrees(item)}>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-items-price"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-total'>
                        <h2>PRODUC SUMMRY</h2>
                        <div className='d-flex'>
                            <h4>TOTAL PRICE :</h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart