/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
import { BackButton } from 'components/BackButton';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { postOrder } from 'api/orders';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, CartContext, MainContext } from 'context';
import { NavBarRoute } from 'types/NavBarRoute';
import { getCategoryName } from 'utils/getCategoryName';
import { CATEGORY_ID } from 'utils/constants';
import './CartPage.scss';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

export const CartPage: React.FC = () => {
  const { user, isAuth } = useContext(AuthContext);
  const { darkTheme, notifyCartDelete } = useContext(MainContext);
  const navigate = useNavigate();

  const {
    cart, handleAdd, handleDelete, handleRemove,
  } =
    useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [postError, setPostError] = useState(false);

  console.log('user', user, 'isAuth', isAuth);
  console.log(postError);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, product) => acc + product.count * (product.discountPrice || product.fullPrice),
      0,
    );

    const newTotalItems = cart.reduce((acc, { count }) => acc + count, 0);

    setTotalItems(newTotalItems);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const onCheckout = () => {
    if (!user) {
      navigate(NavBarRoute.Login, { replace: true });
    } else {
      navigate(NavBarRoute.Users, { replace: true });

      const data = {
        userId: 2111,
        totalPrice,
        quantity: totalItems,
      };

      postOrder(data)
        .catch(() => setPostError(true));
    }
  };

  return (
    <>
      <BackButton />

      <div className="cart__page">
        <h1 className="cart__title">Cart</h1>

        {cart.length === 0 ? (
          <div className="cart__block">
            <h1 className="cart__title">Your cart is empty...</h1>
            <p className="cart__subtitle">
              But it&apos;s never too late to fix it!
            </p>
            <a className="back-home" href="#/">
              Go main page
            </a>
          </div>
        ) : (
          <div className="cart__content">
            <section className="cart__products">
              {cart.map((product) => (
                <li className="box cart__product" key={product.itemId}>
                  <div className="cart__product__main">
                    <button
                      className="delete cart__product__button"
                      type="button"
                      onClick={() => {
                        handleRemove(product);
                        notifyCartDelete();
                      }}
                    >
                      x
                    </button>

                    <Link
                      to={`/${getCategoryName(
                        product.category_id,
                        CATEGORY_ID,
                      )}/${product.productId}`}
                      relative="path"
                      className="cart__product__link"
                    >
                      <div className="cart__product__image-block">
                        <img
                          src={`${CLOUDINARY}${product.image}`}
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
                        className={classNames('cart__product__counter-button', {
                          'cart__product__counter-button__active':
                            product.count !== 1 && darkTheme,
                        })}
                        disabled={product.count === 1}
                        onClick={() => handleDelete(product)}
                      >
                        -
                      </button>

                      <p className="cart__product__counter">{product.count}</p>

                      <button
                        type="button"
                        className={classNames('cart__product__counter-button', {
                          'cart__product__counter-button__active': darkTheme,
                        })}
                        onClick={() => handleAdd(product)}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart__product__price">
                      {`$${
                        (product.discountPrice || product.fullPrice) *
                        product.count
                      }`}
                    </p>
                  </div>
                </li>
              ))}
            </section>

            <section className="box cart__checkout">
              <h3 className="cart__checkout__full-price">{`$${totalPrice}`}</h3>
              <p className="cart__checkout__total-count">{`Total for ${totalItems} items`}</p>
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
        )}
      </div>
    </>
  );
};
