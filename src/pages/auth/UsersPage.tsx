/* eslint-disable @typescript-eslint/no-shadow */
import { usePageError } from 'hooks/usePageError';
import React, { useContext, useState } from 'react';
// import { userService } from 'services/userService';
import { MainContext } from 'context';
// import { IUser } from 'types/User';
import styles from './Auth.module.scss';
import { ReactComponent as CloseDark } from '../../assets/icons/close-dark.svg';
import { ReactComponent as Close } from '../../assets/icons/close-light.svg';

export const UsersPage: React.FC = () => {
  const [error] = usePageError('');
  // const [users, setUsers] = useState<IUser[]>([]);
  const { darkTheme } = useContext(MainContext);

  // useEffect(() => {
  //   userService
  //     .getAll()
  //     .then(({ data }) => setUsers(data))
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);

  const orders1 = [
    {
      id: 1,
      userId: 3,
      totalPrice: 300,
      quantity: 3,
      user: {
        id: 9,
        email: 'nemac4343@gmail.com',
      },
    },
    {
      id: 3,
      userId: 2,
      totalPrice: 3200,
      quantity: 5,
      user: {
        id: 2,
        email: 'fantityloc@gmail.com',
      },
    },
    {
      id: 4,
      userId: 12,
      totalPrice: 900,
      quantity: 1,
      user: {
        id: 6,
        email: 'climentinegirey@gmail.com',
      },
    },
  ];

  const [orders, setOrders] = useState(orders1);

  const handleDeleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

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
