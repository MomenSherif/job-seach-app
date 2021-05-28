import React from 'react';

import TitleProps from './Title.types';
import styles from './Title.module.scss';

const Title: React.FC<TitleProps> = ({
  component,
  variant,
  className = '',
  ...props
}) =>
  React.createElement(component, {
    className: `${styles.title} ${styles[variant ?? component]} ${className}`,
    ...props,
  });

export default Title;
