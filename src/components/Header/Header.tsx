/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import classNames from 'classnames';
// import { Navigation } from 'components/Navigation';
import { Modal } from 'react-responsive-modal';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { Logo } from '../common/Logo';
import 'react-responsive-modal/styles.css';
import styles from './Header.module.scss';

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(true);

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={classNames(styles.Header, className)}>
      <Logo className={styles.Header__logo} type="small" />

      {/* <button type="button" onClick={onOpenModal}>
        Open modal
      </button> */}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={<CloseIcon />}
        classNames={{
          overlay: styles.Overlay,
          modal: styles.Modal,
          modalAnimationIn: styles.customEnterOverlayAnimation,
          modalAnimationOut: styles.customLeaveOverlayAnimation,
        }}
        animationDuration={800}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div className={classNames(styles.Header, className)}>
            <Logo className={styles.Header__logo} type="small" />
          </div>
          {/* <Navigation /> */}
          <div>List</div>
          <div>Footer</div>
        </div>
      </Modal>

      {/* <Navigation /> */}
    </div>
  );
};
