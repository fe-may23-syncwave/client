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
import { getTechSpecs } from 'utils/getTechSpecs';
import { ProductsSlider } from 'components/ProductsSlider';
import { ProductColors } from '../../components/ProductColors';
import { ProductCapacity } from '../../components/ProductCapacity';
import { BackButton } from '../../components/BackButton';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Product, ProductWithDetails } from '../../types/Product';

const CLOUDINARY = process.env.REACT_APP_CLOUDINARY_URL;

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
    setIsLoading(true);
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

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !product && !prepared && <NotFoundPage />}
      {product && prepared && !isLoading && (
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

                <div className="product-page__selects">
                  <div className="product-page__select-container">
                    <div className="product-page__colors colors">
                      <p className="product-page__subtitle">Available colors</p>

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
                      {product.discountPrice ? `$${product.fullPrice}` : ''}
                    </p>
                  </div>

                  <div className="product-page__buttons">
                    <AddToCartButton
                      product={prepared}
                      styles={[
                        'product-page__button',
                        'product-page__button--active',
                        'product-page__button--dark',
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
                    {getTechSpecs(typeOfProducts, product)
                      .slice(2)
                      .map((data) => (
                        <div
                          key={data[0]}
                          className="desription__techspecs--content"
                        >
                          <p className="desription__techspecs--title">
                            {data[0] === 'ram'
                              ? data[0].toUpperCase()
                              : capitalizeText(String(data[0]))}
                          </p>
                          <p className="desription__techspecs--data">
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

              <div className="product-page__desription desription">
                <div className="desription__content">
                  <div className="desription__about">
                    <h1 className="desription__title">About</h1>

                    {product.description.map((desc) => (
                      <Fragment key={desc.title}>
                        <h3
                          className="desription__about--heading"
                          key={desc.title}
                        >
                          {desc.title}
                        </h3>

                        <p className="desription__about--description">
                          {desc.text}
                        </p>
                      </Fragment>
                    ))}
                  </div>
                  <div className="desription__techspecs">
                    <h1 className="desription__title">Tech specs</h1>
                    {getTechSpecs(typeOfProducts, product).map((data) => (
                      <div
                        key={data[0]}
                        className="desription__techspecs--content"
                      >
                        <p className="desription__techspecs--title">
                          {data[0] === 'ram'
                            ? data[0].toUpperCase()
                            : capitalizeText(String(data[0]))}
                        </p>
                        <p className="desription__techspecs--data">
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
