import React from 'react';
import './Home.css';

import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <img 
            className='home__image'
            src='https://cdn.wccftech.com/wp-content/uploads/2022/06/esports-fgc-HD-scaled.jpg'
            alt=""
        />
        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product 
            id='1'
            title='Classic Controller Enamel Pins'
            price={12}
            rating={5}
            image='https://i.etsystatic.com/16499560/r/il/0a15d7/3515850622/il_1588xN.3515850622_89u0.jpg'
          />
          <Product 
            id='2'
            title='One Piece Zoro Yama Pin'
            price={55}
            rating={5}
            image='https://i.etsystatic.com/25675013/r/il/727488/4174485561/il_1588xN.4174485561_gek1.jpg'
          />
        </div>

        <div className="home__row">
          <Product 
            id='3'
            title='Bleach: Thousand Year Blood War Short Sleeve Tee'
            price={24}
            rating={5}
            image='https://i.etsystatic.com/14681644/r/il/b4af39/4172260412/il_1588xN.4172260412_kz2b.jpg'
          />
          <Product 
            id='4'
            title='Marvel Vs Capcom 2 Sprites'
            price={10}
            rating={5}
            image='https://i.etsystatic.com/10527355/r/il/650c2d/3831462643/il_1588xN.3831462643_7tvx.jpg'
          />
          <Product 
            id='5'
            title='Blanka-Chan Plush (classic colors)'
            price={19}
            rating={3}
            image='https://i.etsystatic.com/9754606/r/il/00a5a7/3581848600/il_1588xN.3581848600_cwa5.jpg'
          />
        </div>
        <div className="home__row">
          <Product 
            id='6'
            title='Handmade Wooden Arcade Stick'
            price={109}
            rating={4}
            image='https://i.etsystatic.com/32329841/r/il/3db443/3501094206/il_1588xN.3501094206_l6ul.jpg'
          />
        </div>
        
    </div>
  )
}

export default Home