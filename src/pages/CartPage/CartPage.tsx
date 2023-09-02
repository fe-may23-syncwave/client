/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { BackButton } from 'components/BackButton';
import React, { useContext } from 'react';
import './CartPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'context';
import { NavBarRoute } from 'types/NavBarRoute';

export const CartPage: React.FC = () => {
  const { user, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log('user', user, 'isAuth', isAuth);

  const onCheckout = () => {
    if (!user) {
      navigate(NavBarRoute.Login, { replace: true });
    } else {
      navigate(NavBarRoute.Users, { replace: true });
    }
  };

  const CLOUDINARY =
    'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

  const products = [
    {
      id: '1',
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
    {
      id: '2',
      category: 'phones',
      phoneId: 'apple-iphone-7-plus-32gb-black',
      itemId: 'apple-iphone-7-plus-32gb-black',
      name: 'Apple iPhone 7 Plus 32GB Black',
      fullPrice: 540,
      price: 500,
      screen: "5.5' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
    },
    {
      id: '3',
      category: 'phones',
      phoneId: 'apple-iphone-8-64gb-gold',
      itemId: 'apple-iphone-8-64gb-gold',
      name: 'Apple iPhone 8 64GB Gold',
      fullPrice: 600,
      price: 550,
      screen: "4.7' IPS",
      capacity: '64GB',
      color: 'gold',
      ram: '2GB',
      year: 2017,
      image: 'img/phones/apple-iphone-8/gold/00.jpg',
    },
  ];
  // these products are for testing

  return (
    <>
      <BackButton />
      <div className="cart__page">
        <h1 className="cart__title">Cart</h1>

        <div className="cart__content">
          <section className="cart__products">
            {products.map((product) => (
              <li className="box cart__product" key={product.id}>
                <div className="cart__product__main">
                  <button
                    className="delete cart__product__button"
                    type="button"
                  >
                    x
                  </button>

                  <Link to={product.phoneId} className="cart__product__link">
                    <div className="cart__product__image-block">
                      <img
                        src={`${CLOUDINARY}/${product.image}`}
                        alt={product.name}
                        className="cart__product__image"
                      />
                    </div>
                    <h2 className="cart__product__title">{`${product.name} (XXXXX)`}</h2>
                  </Link>
                </div>

                <div className="cart__product__info">
                  <div className="cart__product__quantity">
                    <button
                      type="button"
                      className="button is-small cart__product__button"
                    >
                      -
                    </button>

                    <p className="cart__product__counter">1</p>

                    <button
                      type="button"
                      className="button is-small cart__product__button"
                    >
                      +
                    </button>
                  </div>

                  <p className="cart__product__price">
                    {`$${product.price * 1}`}
                  </p>
                </div>
              </li>
            ))}
          </section>

          <section className="box cart__checkout">
            <h3 className="cart__checkout__full-price">{`$${200}`}</h3>
            <p className="cart__checkout__total-count">{`Total for ${3} items`}</p>
            <hr className="cart__checkout__line" />
            <button
              type="button"
              className="cart__checkout__button"
              // disabled={!user || products.length === 0}
              onClick={onCheckout}
            >
              Checkout
            </button>
          </section>
        </div>
      </div>
    </>
  );
};
