/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Navigation } from 'components/Navigation';
import { Modal } from 'react-responsive-modal';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { NavBarLinks } from 'components/Navigation/NavBarLinks';
import { NavBarIcons } from '../Navigation/NavBarIcons';

import { Logo } from '../common/Logo';
import 'react-responsive-modal/styles.css';
import styles from './Header.module.scss';

const {
  Content: ModalContent,
  Content__body: ContentBody,
  'Content__block--links': ContentBlockLinks,
  'Content__block--icons': ContentBlockIcons,
} = styles;

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={classNames(styles.Header, className)}>
      <Logo className={styles.Header__logo} type="small" />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeIcon={
          <div className={styles.CloseIcon}>
            <CloseIcon />
          </div>
        }
        classNames={{
          overlay: styles.Overlay,
          modal: styles.Modal,
          modalAnimationIn: styles.customEnterOverlayAnimation,
          modalAnimationOut: styles.customLeaveOverlayAnimation,
        }}
        animationDuration={800}
      >
        <div className={ModalContent}>
          <div className={classNames(styles.Header, className)}>
            <Logo className={styles.Header__logo} type="small" />
          </div>

          <div className={ContentBody}>
            <NavBarLinks className={ContentBlockLinks} onClick={onCloseModal} />

            <NavBarIcons className={ContentBlockIcons} onClick={onCloseModal} />
          </div>
        </div>
      </Modal>

      <Navigation openModal={onOpenModal} />
    </div>
  );
};
