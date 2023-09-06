/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import { usePageError } from 'hooks/usePageError';
import React, { useContext, useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { userService } from 'services/userService';
import { orderService } from 'services/orderService';
import { MainContext } from 'context';
import { IUser } from 'types/User';
import { Order } from 'types/Order';
import { Loader } from 'components/common/Loader';
import { ReactComponent as CloseDark } from '../../assets/icons/close-dark.svg';
import { ReactComponent as Close } from '../../assets/icons/close-light.svg';
import styles from './Auth.module.scss';

export const UsersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = usePageError('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const { darkTheme } = useContext(MainContext);

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setLoading(true);
    userService
      .getAll()
      .then(({ data }) => setUsers(data))
      .catch((error) => {
        setError(error.message);
      });

    orderService
      .getOrders()
      .then((response) => {
        const { data } = response;

        setOrders(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteOrder = (id: number) => {
    orderService.deleteOrder(id);

    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const startConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  console.log(users);
  console.log(orders);

  return (
    <div className="content">
      <h1 className={styles.Title}>Admin panel</h1>
      {loading && <Loader />}

      {error && !loading && (
        <p className="notification is-danger is-light">{error}</p>
      )}

      {orders.length > 0 && !error && !loading && (
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
          <button
            type="button"
            className={styles.Process}
            onClick={startConfetti}
          >
            Send for processing
          </button>
          {showConfetti && <Confetti width={width} height={height} />}
        </>
      )}
    </div>
  );
};
