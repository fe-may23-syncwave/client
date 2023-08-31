import React, { useState } from 'react';
// import { getProducts } from 'api/phones';
// import { Phone } from 'types/PhoneType';
import { ProductsList } from 'pages/ProductsList';
import './CatalogPage.scss';
import { Pagination } from 'components/Pagination';
import { getNumbers } from 'utils/getNumbers';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { Dropdowns } from 'components/Dropdowns';

interface Props {
  title: string;
}

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
  {
    id: '4',
    category: 'phones',
    phoneId: 'apple-iphone-11-64gb-black',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.jpg',
  },
  {
    id: '5',
    category: 'phones',
    phoneId: 'apple-iphone-11-128gb-yellow',
    itemId: 'apple-iphone-11-128gb-yellow',
    name: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    price: 1050,
    screen: "6.1' IPS",
    capacity: '128GB',
    color: 'yellow',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/yellow/00.jpg',
  },
  {
    id: '6',
    category: 'phones',
    phoneId: 'apple-iphone-11-256gb-green',
    itemId: 'apple-iphone-11-256gb-green',
    name: 'Apple iPhone 11 256GB Green',
    fullPrice: 1172,
    price: 1115,
    screen: "6.1' IPS",
    capacity: '256GB',
    color: 'green',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/green/00.jpg',
  },
  {
    id: '7',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-64gb-gold',
    itemId: 'apple-iphone-11-pro-64gb-gold',
    name: 'Apple iPhone 11 Pro 64GB Gold',
    fullPrice: 1312,
    price: 1270,
    screen: "5.8' OLED",
    capacity: '64GB',
    color: 'gold',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/gold/00.jpg',
  },
  {
    id: '8',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-256gb-midnightgreen',
    itemId: 'apple-iphone-11-pro-256gb-midnightgreen',
    name: 'Apple iPhone 11 Pro 256GB Midnight green',
    fullPrice: 1640,
    price: 1570,
    screen: "5.8' OLED",
    capacity: '256GB',
    color: 'midnightgreen',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/midnightgreen/00.jpg',
  },
  {
    id: '9',
    category: 'phones',
    phoneId: 'apple-iphone-11-pro-512gb-silver',
    itemId: 'apple-iphone-11-pro-512gb-silver',
    name: 'Apple iPhone 11 Pro 512GB Silver',
    fullPrice: 1880,
    price: 1780,
    screen: "5.8' OLED",
    capacity: '512GB',
    color: 'silver',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11-pro/silver/00.jpg',
  },
];

export const CatalogPage: React.FC<Props> = ({ title }) => {
  // const currentURL = window.location.href;
  // const typeOfProducts = currentURL.split('/').reverse()[0];

  // const [products, setProducts] = useState<Phone[]>([]);
  const [hasError] = useState(false);

  // useEffect(() => {
  //   getPhones(`/${typeOfProducts}`)
  //     .then(setProducts)
  //     .catch(() => setHasError(true));
  // }, []);

  const [itemsOnPage] = useState(8);
  const [activePage, setActivePage] = useState(1);
  const [startValue, setStartValue] = useState(1);
  const [endValue, setEndvalue] = useState(itemsOnPage);
  const totalAmount = products.length;

  const changeCurrentPage = (selectedPage: number) => {
    setActivePage(selectedPage);
    setStartValue(selectedPage * itemsOnPage - itemsOnPage + 1);
    setEndvalue(selectedPage * itemsOnPage);
  };

  const calculateTotalPages = (allItems: number) => {
    const amount = Math.ceil(totalAmount / allItems);

    return getNumbers(1, amount);
  };

  const amountOfPages = calculateTotalPages(itemsOnPage);

  const productsOnPage = products.slice(startValue - 1, endValue);

  return (
    <>
      <BreadCrumbs />
      <div className="catalog__page">
        <h1 className="catalog__title">{title}</h1>
        {!hasError && (
          <p className="catalog__subtitle">{`${products.length} models`}</p>
        )}
        {hasError && <h2 className="catalog__title">There is some problems</h2>}

      {products.length > 0 && !hasError && (
        <>
          <Dropdowns />
          <ProductsList products={productsOnPage} />
          {amountOfPages.length > 1 && (
            <Pagination
              currentPage={activePage}
              totalPages={amountOfPages}
              onPageChange={(selectedPage) => changeCurrentPage(selectedPage)}
            />
          )}
        </>
      )}
    </div>
  );
};
