import React from 'react';

import ContainerProps from './Container.types';
import styles from './Container.module.scss';

const Container: React.FC<ContainerProps> = ({ as = 'div', className = '', ...props }) =>
  React.createElement(as, {
    className: `${styles.container} ${className}`,
    ...props,
  });

export default Container;