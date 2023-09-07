import React, { useEffect, useState } from 'react';
// import { getProducts } from 'api/phones';
// import { Phone } from 'types/PhoneType';
import { ProductsList } from 'pages/ProductsList';
import './CatalogPage.scss';
import { Pagination } from 'components/Pagination';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { Dropdowns } from 'components/Dropdowns';
import { calculateTotalPages } from 'utils/calculateTotal';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAmount, getProducts } from 'api/products';
import { Product } from 'types/Product';
import { Loader } from 'components/common/Loader';
// import { divide } from 'lodash';

interface Props {
  title: string;
  type: string;
}

export const CatalogPage: React.FC<Props> = ({ title, type }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const perPageParam = queryParams.get('perPage') || '4';
  const perSortByParam = queryParams.get('sort');
  const search = queryParams.get('search') || '';

  const [products, setProducts] = useState<Product[]>([]);
  const [hasError, setHasError] = useState(false);

  const [perPage, setPerPage] = useState(perPageParam || '4');
  const [sortBy, setSortBy] = useState(perSortByParam || 'age');

  let preparedPerPage;

  if (perPageParam === 'all') {
    preparedPerPage = 1000;
  } else {
    preparedPerPage = +perPageParam;
  }

  const [itemsOnPage, setItemsOnPage] = useState<number>(preparedPerPage);

  const [activePage, setActivePage] = useState(1);
  const [productsLength, setProductsLength] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAmount('home/productCounts')
      .then((data) => setProductsLength(data.counts[type]))
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, [type]);

  useEffect(() => {
    setLoading(true);
    setHasError(false);
    getProducts(
      `products?category=${type}&page=${activePage}&perPage=${perPage}&sortBy=${sortBy}&search=${search}`,
    )
      .then(setProducts)
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, [type, perPage, sortBy, activePage, search]);

  const handleChangePerPage = (value: string) => {
    setActivePage(1);

    if (value === 'all') {
      queryParams.delete('page');

      return;
    }

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

  const amountOfPages = calculateTotalPages(itemsOnPage, productsLength);

  return (
    <>
      <BreadCrumbs />
      <div className="catalog__page">
        <h1 className="catalog__title">{title}</h1>
        {loading && <Loader />}
        {!hasError && !loading && (
          <p className="catalog__subtitle">{`${productsLength} models`}</p>
        )}
        {hasError && !loading && search.length === 0 && (
          <h2 className="catalog__title">There is some problems</h2>
        )}

        {hasError && !loading && search.length > 0 && (
          <p className="catalog__no-result">
            Nothing found &#x1F50D;. Make sure your query is spelled correctly.
          </p>
        )}

        {products.length > 0 && !hasError && !loading && (
          <>
            <Dropdowns
              handleDropdownChange={handleDropdownChange}
              perPage={perPage}
              sortBy={sortBy}
            />
            <ProductsList products={products} />
            {amountOfPages.length > 1 && !search && (
              <Pagination
                currentPage={activePage}
                totalPages={amountOfPages}
                onPageChange={(selectedPage) => setActivePage(selectedPage)}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
