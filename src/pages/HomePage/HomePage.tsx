/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Slider } from '../../components/Slider';
import { ProductsSlider } from '../../components/ProductsSlider';
import { ProductCategories } from '../../components/ProductCategories';
import { getProducts } from '../../api/products';
import { Product } from '../../types/Product';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const HomePage: React.FC = () => {
  const [hotPrices, setHotPrices] = useState<Product[]>([]);
  const [brandNew, setBrandNew] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [storedData, setStoredData] = useLocalStorage<Product[]>(
    'productsData',
    [],
  );

  const processAndSetData = (data: Product[]) => {
    const discountedProducts = data
      .filter((product) => product.discountPrice !== undefined)
      .sort(
        (a, b) =>
          b.fullPrice -
          (b.discountPrice || b.fullPrice) -
          (a.fullPrice - (a.discountPrice || a.fullPrice)),
      )
      .slice(0, 12);

    setHotPrices(discountedProducts);

    const nonDiscountedProducts = data
      .sort((a, b) => b.fullPrice - a.fullPrice)
      .slice(0, 12);

    setBrandNew(nonDiscountedProducts);
  };

  // useEffect(() => {
  //   if (storedData.length > 0) {
  //     processAndSetData(storedData);
  //     setLoading(false);
  //   } else {
  //     getProducts('/tablets')
  //       .then((data: Product[]) => {
  //         setStoredData(data);
  //         processAndSetData(data);
  //         console.log(data);
  //         setLoading(false);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setLoading(false);
  //       });
  //   }
  // }, [storedData]);

  useEffect(() => {
    getProducts('/products')
      .then((data: Product[]) => {
        processAndSetData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />

      <ProductsSlider title="Brand new models" phones={brandNew} />

      <ProductCategories />

      <ProductsSlider title="Hot prices" phones={hotPrices} />
    </div>
  );
};
