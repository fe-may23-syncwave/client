import React, { useState } from 'react';
// import { getProducts } from 'api/phones';
// import { Phone } from 'types/PhoneType';
import { ProductsList } from 'pages/ProductsList';
import './CatalogPage.scss';
import { Pagination } from 'components/Pagination';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { Dropdowns } from 'components/Dropdowns';
import { calculateTotalPages } from 'utils/calculateTotal';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  title: string;
}

const products = [
  {
    id: '1',
    category_id: 1,
    productId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    discountPrice: 375,
    screen: "4.7' IPS",
    capacity_id: 1,
    color_id: 1,
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  },
  {
    id: '2',
    category_id: 1,
    productId: 'apple-iphone-11-128gb-yellow',
    itemId: 'apple-iphone-11-128gb-yellow',
    name: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    discountPrice: 1050,
    screen: "6.1' IPS",
    capacity_id: 3,
    color_id: 3,
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/yellow/00.jpg',
  },
  {
    id: '3',
    category_id: 1,
    productId: 'apple-iphone-8-32gb-black',
    itemId: 'apple-iphone-8-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    discountPrice: 375,
    screen: "4.7' IPS",
    capacity_id: 1,
    color_id: 1,
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  },
];

export const CatalogPage: React.FC<Props> = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const perPageParam = queryParams.get('perPage') || '4';
  const perSortByParam = queryParams.get('sort');

  let preparedPerPage;

  if (perPageParam === 'all') {
    preparedPerPage = 1000;
  } else {
    preparedPerPage = +perPageParam;
  }

  const [perPage, setPerPage] = useState(perPageParam || '4');
  const [sortBy, setSortBy] = useState(perSortByParam || 'age');

  const [hasError] = useState(false);
  const [itemsOnPage, setItemsOnPage] = useState<number>(preparedPerPage);

  const [activePage, setActivePage] = useState(1);
  const [startValue, setStartValue] = useState(1);
  const [endValue, setEndvalue] = useState(itemsOnPage);

  const changeCurrentPage = (selectedPage: number) => {
    setActivePage(selectedPage);
    setStartValue(selectedPage * itemsOnPage - itemsOnPage + 1);
    setEndvalue(selectedPage * itemsOnPage);
  };

  const handleChangePerPage = (value: string) => {
    setActivePage(1);
    setStartValue(1);

    if (value === 'all') {
      setEndvalue(1000);
      queryParams.delete('page');

      return;
    }

    setEndvalue(1 * +value);
    queryParams.set('page', '1');
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    param: string,
  ) => {
    const selectedValue = event.target.value;

    if (param === 'sort') {
      setSortBy(selectedValue);
    } else {
      setPerPage(selectedValue);
      setItemsOnPage(+selectedValue);
      handleChangePerPage(selectedValue);
    }

    queryParams.set(param, selectedValue);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const amountOfPages = calculateTotalPages(itemsOnPage, products.length);

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
            <Dropdowns
              handleDropdownChange={handleDropdownChange}
              perPage={perPage}
              sortBy={sortBy}
            />
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
    </>
  );
};

// Leave it for fetching
// const currentURL = window.location.href;
// const typeOfProducts = currentURL.split('/').reverse()[0];

// const [products, setProducts] = useState<Phone[]>([]);
// useEffect(() => {
//   getPhones(`/${typeOfProducts}`)
//     .then(setProducts)
//     .catch(() => setHasError(true));
// }, []);
