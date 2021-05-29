import NavLink from '@atoms/NavLink';

import NavListProps from './NavList.types';
import styles from './NavList.module.scss';

const NavList: React.FC<NavListProps> = ({
  list,
  className = '',
  variant = 'horizontal',
  activeClassName,
  ...props
}) => {
  return (
    <nav>
      <ul
        className={`${styles['nav-list']} ${styles[variant]} ${className}`}
        {...props}
      >
        {list.map(({ label, to }, i) => (
          <li key={String(i)}>
            <NavLink to={to} activeClassName={activeClassName}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
