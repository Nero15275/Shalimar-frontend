import React from 'react'
import './pricecomponent.scss'
const PriceComponent = (props: any) => {
     const { cartItems } = props

     let totalprice = 0
     let paymentAmount = 0
     const carrBagPrice = 10
     let discount = 0
     cartItems.forEach((item: any) => {
          console.log('====================================');
          console.log(item);
          console.log('====================================');
          totalprice += item.price * item.quantity
     })
     paymentAmount = totalprice + carrBagPrice - discount


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
                              <div className="pricing">₹0</div>
                         </div>
                         <div className="body-row">
                              <div className="title">Total</div>
                              <div className="pricing">₹{paymentAmount}.00</div>
                         </div>

                    </div>
                    <div className="checkout">Checkout</div>
               </div>
          </div>
     )
}

export default PriceComponent
