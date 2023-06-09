import React from 'react'
import './pricecomponent.scss'
import { useNavigate } from 'react-router-dom'
const PriceComponent = (props: any) => {
     const navigate = useNavigate()
     const { cartItems } = props

     let totalprice = 0
     let paymentAmount = 0
     const carrBagPrice = 10
     let discount = 0
     cartItems.forEach((item: any) => {

          totalprice += item.price * item.quantity
     })
     cartItems.forEach((item: any) => {

          discount += item.discount * item.quantity
     })
     paymentAmount = totalprice + carrBagPrice - discount

     const handleCheckout = () => {
          navigate('/address')
     }

     return (
          <div>
               <div className="price-main-container">
                    <div className="title-row">Price Details</div>
                    <div className="price-body">
                         <div className="body-row">
                              <div className="title">Bag Total</div>
                              <div className="pricing">₹{totalprice}.00</div>
                         </div>
                         <div className="body-row">
                              <div className="title">Delivery Charges</div>
                              <div className="pricing">₹0</div>
                         </div>
                         <div className="body-row">
                              <div className="title">Carry Bag</div>
                              <div className="pricing">₹10.00</div>
                         </div>
                         <div className="body-row">
                              <div className="title">Discount</div>
                              <div className="pricing">₹{discount}</div>
                         </div>
                         <div className="body-row">
                              <div className="title">Total</div>
                              <div className="pricing">₹{paymentAmount}.00</div>
                         </div>

                    </div>
                    <div className="checkout" onClick={handleCheckout}>Checkout</div>
               </div>
          </div>
     )
}

export default PriceComponent
