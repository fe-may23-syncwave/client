import React from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';

const config = {
  h1: {
    className: styles.h1,
    defaultTagName: 'h1',
  },
  h2: {
    className: styles.h2,
    defaultTagName: 'h2',
  },
  h3: {
    className: styles.h3,
    defaultTagName: 'h3',
  },
  h4: {
    className: styles.h4,
    defaultTagName: 'h4',
  },
  uppercase: {
    className: styles.uppercase,
    defaultTagName: 'p',
  },
  text: {
    className: styles.text,
    defaultTagName: 'p',
  },
  'text-small': {
    className: styles.small,
    defaultTagName: 'p',
  },
  label: {
    className: styles.label,
    defaultTagName: 'p',
  },
};

interface TypographyProps {
  type: keyof typeof config;
  className?: string;
  tagName?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  type,
  className,
  tagName,
  children,
}) => {
  const Tag = (tagName
    || config[type].defaultTagName) as keyof React.JSX.IntrinsicElements;
  const predefinedClassName = config[type].className;

  return (
    <Tag className={classNames(predefinedClassName, className)}>{children}</Tag>
  );
};
