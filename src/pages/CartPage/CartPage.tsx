/* eslint-disable max-len */
import { BackButton } from 'components/BackButton';
import React, { useContext, useEffect, useState } from 'react';
import './CartPage.scss';
import { Link } from 'react-router-dom';
import { CartContext } from 'context/CartContext';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

export const CartPage: React.FC = () => {
  const {
    cart,
    handleAdd,
    handleDelete,
    handleRemove,
  } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acc, product) => acc + product.count * (product.discountPrice || product.fullPrice),
      0,
    );

    const newTotalItems = cart.reduce((acc, { count }) => acc + count, 0);

    setTotalItems(newTotalItems);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <>
      <BackButton />

      <div className="cart__page">
        <h1 className="cart__title">Cart</h1>

        {cart.length === 0
          ? (<h1>There are no products</h1>)
          : (
            <div className="cart__content">
              <section className="cart__products">
                {cart.map((product) => (
                  <li className="box cart__product" key={product.productId}>
                    <div className="cart__product__main">
                      <button
                        className="delete cart__product__button"
                        type="button"
                        onClick={() => handleRemove(product)}
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
                          className="button is-small cart__product__button"
                          disabled={product.count === 1}
                          onClick={() => handleDelete(product)}
                        >
                          -
                        </button>

                        <p className="cart__product__counter">{product.count}</p>

                        <button
                          type="button"
                          className="button is-small cart__product__button"
                          onClick={() => handleAdd(product)}
                        >
                          +
                        </button>
                      </div>

                      <p className="cart__product__price">
                        {`$${(product.discountPrice || product.fullPrice) * product.count}`}
                      </p>
                    </div>
                  </li>
                ))}
              </section>

              <section className="box cart__checkout">
                <h3 className="cart__checkout__full-price">{`$${totalPrice}`}</h3>
                <p className="cart__checkout__total-count">{`Total for ${totalItems} items`}</p>
                <hr className="cart__checkout__line" />
                <button type="button" className="cart__checkout__button">
                  Checkout
                </button>
              </section>
            </div>
          )}
      </div>
    </>
  );
};
