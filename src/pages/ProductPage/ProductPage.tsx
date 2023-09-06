/* eslint-disable max-len */
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.scss';
import '../../components/ProductCard/ProductCard.scss';
import classNames from 'classnames';
import {
  AddToCartButton,
  FavouritesButton,
} from 'components/ProductCard/buttons';
import { Loader } from 'components/common/Loader';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
  getNewest,
  getProductById,
  getProductByIdWihDetails,
} from 'api/products';
import { capitalizeText } from 'utils/capitalizeText';
import { createId } from 'utils/createId';
import { ProductsSlider } from 'components/ProductsSlider';
import { ProductColors } from '../../components/ProductColors';
import { ProductCapacity } from '../../components/ProductCapacity';
import { BackButton } from '../../components/BackButton';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Product, ProductWithDetails } from '../../types/Product';

const CLOUDINARY
  = 'https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductWithDetails | null>(null);
  const [newestProducts, setNewestProducts] = useState<Product[]>([]);
  const [mainPhoto, setMainPhoto] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [prepared, setPrepared] = useState<Product>();
  const currentURL = window.location.href;
  const typeOfProducts = currentURL.split('/').reverse()[1];

  useEffect(() => {
    getProductByIdWihDetails(`${typeOfProducts}/${productId}`)
      .then((prod) => {
        setProduct(prod);
        setMainPhoto(prod.images[0]);

        return prod;
      })
      .then((prod) => getProductById(prod.id).then((data) => setPrepared(data)))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      })
      .finally(() => setIsLoading(false));
  }, [productId, typeOfProducts]);

  useEffect(() => {
    getNewest()
      .then((response) => {
        const { newest } = response;

        setNewestProducts(newest);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      });
  }, []);

  let techSpecs;
  let techSpecsAscesories;

  if (product) {
    techSpecs = Object.entries(product).slice(-7);
    techSpecsAscesories = [
      ['Color', product.color],
      ['Material', 'silicone'],
      ['Warranty', '30 days'],
      ['Made in', 'USA'],
    ];
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !product && !prepared && <NotFoundPage />}
      {product
        && prepared
        && !isLoading
        && techSpecs
        && techSpecsAscesories && (
        <>
          <BreadCrumbs />
          <div className="product-page">
            <div className="product-page__content">
              <BackButton />

              <h1 className="product-page__title">{product.name}</h1>

              <div className="product-page__top">
                <div className="product-page__photos photos">
                  <div className="photos__sidebar">
                    {product.images.map((image) => (
                      <button
                        type="button"
                        className={classNames('photos__sidebar--wrapper', {
                          'photos__sidebar--wrapper--active':
                              image === mainPhoto,
                        })}
                        onClick={() => setMainPhoto(image)}
                        key={image}
                      >
                        <img
                          src={`${CLOUDINARY}/${image}`}
                          alt="product"
                          className="photos__sidebar--item"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="photos__main">
                    <img
                      src={`${CLOUDINARY}/${mainPhoto}`}
                      alt={product.name}
                      className="photos__main-photo"
                    />
                  </div>
                </div>

                <div className="product-page__rightbar">
                  <div className="product-page__select-container">
                    <div className="product-page__colors colors">
                      <p className="product-page__subtitle">
                        Available colors
                      </p>

                      <ProductColors
                        colors={product.colorsAvailable}
                        currentColor={product.color}
                      />
                    </div>
                  </div>

                  {product.capacity && product.capacityAvailable && (
                    <div className="product-page__select-container">
                      <div className="product-page__capacity capacity">
                        <p className="product-page__subtitle">
                          Select capacity
                        </p>
                        <ProductCapacity
                          capacities={product.capacityAvailable}
                          currentCapacity={product.capacity}
                        />
                      </div>
                    </div>
                  )}

                  <div className="product-page__price">
                    <h2 className="product-page__price--sale">
                      {!product.discountPrice
                        ? `$${product.fullPrice}`
                        : `$${product.discountPrice}`}
                    </h2>

                    <p className="product-page__price--reg">
                      {`$${product.fullPrice}`}
                    </p>
                  </div>

                  <div className="product-page__buttons">
                    <AddToCartButton
                      product={prepared}
                      styles={[
                        'product-page__button',
                        'product-page__button--active',
                      ]}
                    />

                    <FavouritesButton
                      product={prepared}
                      styles={[
                        'product__favourites',
                        'product__favourites--active',
                        'product-page__favourites',
                      ]}
                    />
                  </div>

                  <div className="product-page__description description">
                    {typeOfProducts !== 'accessories'
                      ? techSpecs.slice(3).map((data) => (
                        <div
                          key={data[0]}
                          className="info__techspecs--content"
                        >
                          <p className="info__techspecs--title">
                            {data[0] === 'ram'
                              ? data[0].toUpperCase()
                              : capitalizeText(String(data[0]))}
                          </p>
                          <p className="info__techspecs--data">
                            {String(data[1])}
                          </p>
                        </div>
                      ))
                      : techSpecsAscesories.map((data) => (
                        <div
                          key={data[0]}
                          className="info__techspecs--content"
                        >
                          <p className="info__techspecs--title">
                            {data[0] === 'ram'
                              ? data[0].toUpperCase()
                              : capitalizeText(String(data[0]))}
                          </p>
                          <p className="info__techspecs--data">
                            {String(data[1])}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="product-page__id">
                  <p className="product-page__subtitle">
                    {`ID: ${createId(product.id)}`}
                  </p>
                </div>
              </div>

              <div className="product-page__info info">
                <div className="info__content">
                  <div className="info__about">
                    <h1 className="info__title">About</h1>

                    {product.description.map((desc) => (
                      <Fragment key={desc.title}>
                        <h3 className="info__about--heading" key={desc.title}>
                          {desc.title}
                        </h3>

                        <p className="info__about--description">
                          {desc.text}
                        </p>
                      </Fragment>
                    ))}
                  </div>
                  <div className="info__techspecs">
                    <h1 className="info__title">Tech specs</h1>
                    {typeOfProducts !== 'accessories'
                      ? techSpecs.map((data) => (
                        <div
                          key={data[0]}
                          className="info__techspecs--content"
                        >
                          <p className="info__techspecs--title">
                            {data[0] === 'ram'
                              ? data[0].toUpperCase()
                              : capitalizeText(String(data[0]))}
                          </p>
                          <p className="info__techspecs--data">
                            {String(data[1])}
                          </p>
                        </div>
                      ))
                      : techSpecsAscesories.map((data) => (
                        <div
                          key={data[0]}
                          className="info__techspecs--content"
                        >
                          <p className="info__techspecs--title">
                            {data[0] === 'ram'
                              ? data[0].toUpperCase()
                              : capitalizeText(String(data[0]))}
                          </p>
                          <p className="info__techspecs--data">
                            {String(data[1])}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-page__slider">
            {newestProducts.length > 0 && (
              <ProductsSlider phones={newestProducts} title="Hot prices" />
            )}
          </div>
        </>
      )}
    </>
  );
};
