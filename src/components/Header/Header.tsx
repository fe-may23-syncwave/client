/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import classNames from 'classnames';
import { Navigation } from 'components/Navigation';
import { Modal } from 'react-responsive-modal';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as CloseIconLight } from 'assets/icons/close-light.svg';
import { MainContext } from 'context/MainContext';
import { NavBarLinks } from 'components/Navigation/NavBarLinks';
import { NavBarIcons } from '../Navigation/NavBarIcons';

import { Logo } from '../common/Logo';
import 'react-responsive-modal/styles.css';
import styles from './Header.module.scss';

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { darkTheme } = React.useContext(MainContext);

  const {
    Modal__Content: ModalContent,
    Modal__Content__body: ContentBody,
    'Modal__Content__block--links': ContentBlockLinks,
    'Modal__Content__block--icons': ContentBlockIcons,
    [darkTheme ? 'Modal__Dark' : 'Modal']: ModalTheme,
  } = styles;

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
            {darkTheme ? <CloseIconLight /> : <CloseIcon /> }
          </div>
        }
        classNames={{
          overlay: styles.Overlay,
          modal: ModalTheme,
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
