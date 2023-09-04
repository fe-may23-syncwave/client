/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { BackButton } from 'components/BackButton';
import React, { useContext, useMemo, useState } from 'react';
import './CartPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, CartContext } from 'context';
import { NavBarRoute } from 'types/NavBarRoute';
import classNames from 'classnames';

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
  
  const {
    cart,
    saveToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    totalItems,
    totalPrice,
  } = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const isOne = useMemo(() => {
    return counter === 1;
  }, [counter]);

  const products = [
    {
      category_id: 1,
      productId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      discountPrice: 375,
      screen: '4.7\' IPS',
      capacity_id: 1,
      color_id: 1,
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
    {
      category_id: 1,
      productId: 'apple-iphone-11-128gb-yellow',
      itemId: 'apple-iphone-11-128gb-yellow',
      name: 'Apple iPhone 11 128GB Yellow',
      fullPrice: 1100,
      discountPrice: 1050,
      screen: '6.1\' IPS',
      capacity_id: 3,
      color_id: 3,
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/yellow/00.jpg',
    },
    {
      category_id: 1,
      productId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      discountPrice: 375,
      screen: '4.7\' IPS',
      capacity_id: 1,
      color_id: 1,
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.jpg',
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
              <li className="box cart__product" key={product.productId}>
                <div className="cart__product__main">
                  <button
                    className="delete cart__product__button"
                    type="button"
                  >
                    x
                  </button>

                  <Link to={product.productId} className="cart__product__link">
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
                      className={classNames('button is-small cart__product__button', {
                        'is-static': isOne,
                      })}
                      onClick={handleMinus}
                    >
                      -
                    </button>

                    <p className="cart__product__counter">{counter}</p>

                    <button
                      type="button"
                      className="button is-small cart__product__button"
                      onClick={handlePlus}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart__product__price">
                    {`$${(product.discountPrice || product.fullPrice) * counter}`}
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
