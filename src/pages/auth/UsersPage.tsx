/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import { usePageError } from 'hooks/usePageError';
import React, { useContext, useEffect, useState } from 'react';
import { userService } from 'services/userService';
import { MainContext } from 'context';
import { deleteOrder, getOrders } from 'api/orders';
import { IUser } from 'types/User';
import { Order } from 'types/Order';
import { ReactComponent as CloseDark } from '../../assets/icons/close-dark.svg';
import { ReactComponent as Close } from '../../assets/icons/close-light.svg';
import styles from './Auth.module.scss';

export const UsersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = usePageError('');
  const [users, setUsers] = useState<IUser[]>([]);
  const { darkTheme } = useContext(MainContext);

  useEffect(() => {
    userService
      .getAll()
      .then(({ data }) => setUsers(data))
      .catch((error) => {
        setError(error.message);
      });

    getOrders('orders')
      .then(data => setOrders(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleDeleteOrder = (id: number) => {
    deleteOrder(id)
      .catch(error => setError(error));

    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  console.log(users);

  return (
    <div className="content">
      <h1 className={styles.Title}>Admin panel</h1>

      {error && <p className="notification is-danger is-light">{error}</p>}

      {orders.length > 0 && !error && (
        <>
          <table className={styles.Admin__block}>
            <thead>
              <tr>
                <th>
                  <span className={styles.Subtitle} />
                </th>

                <th>
                  <span className={styles.Subtitle}>Order ID</span>
                </th>

                <th>
                  <span className={styles.Subtitle}>Total Price</span>
                </th>

                <th>
                  <span className={styles.Subtitle}>Quantity</span>
                </th>

                <th>
                  <span className={styles.Subtitle}>User Info</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className={styles.Subtitle__icon}>
                    <button
                      type="button"
                      className={styles.Icon__button}
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      {darkTheme ? <Close /> : <CloseDark />}
                    </button>
                  </td>
                  <td className={styles.Subtitle__text}>{order.id}</td>
                  <td className={styles.Subtitle__text}>{order.totalPrice}</td>
                  <td className={styles.Subtitle__text}>{order.quantity}</td>
                  <td className={styles.Subtitle__text}>
                    <p className={styles.Subtitle__id}>
                      {`User ID: ${order.user.id}`}
                    </p>
                    <p className={styles.Subtitle__email}>
                      {`User Email: ${order.user.email}`}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className={styles.Process}>
            Send for processing
          </button>
        </>
      )}
    </div>
  );
};
