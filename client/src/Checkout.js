import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css'

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [ { basket }, dispatch ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className='checkout__ad' 
          src="https://images.start.gg/images/tournament/8582/image-64ae41d481ff6e702c015bc5355e5270-optimized.jpg?ehk=rUAMQwfPTjmyIon5iNZKu0UylAcyo8smOfNodoIN9NE%3D&ehkOptimized=7DBSihr74U%2Fdp46NEpQUPr1fg26JowslmtP57is4WsU%3D" 
          alt=""
        />
        {basket.length === 0 ? 
        (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p>You have no items in your basket. To add items, click the "Add to basket" button next to an item.</p>
          </div>
        )
        :
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* list all of the checkout items */}
          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        }
      </div>
      {
        basket.length > 0 ? 
        (
          <div className="checkout__right">
            <Subtotal />
          </div>
        ) 
        : 
        <div>

        </div>
      }
    </div>
  )
}

export default Checkout