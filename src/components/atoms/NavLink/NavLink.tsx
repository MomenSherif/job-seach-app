import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';

import styles from './NavLink.module.scss';

const NavLink: React.FC<NavLinkProps> = ({
  className = '',
  children,
  activeClassName,
  ...props
}) => (
  <RouterNavLink
    exact
    className={`${styles['nav-link']} ${className}`}
    activeClassName={activeClassName ?? styles.active}
    {...props}
  >
    {children}
  </RouterNavLink>
);

export default NavLink;
