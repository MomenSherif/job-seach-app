import NavLink from '@atoms/NavLink';

import NavListProps from './NavList.types';
import styles from './NavList.module.scss';

const NavList: React.FC<NavListProps> = ({
  list,
  className = '',
  variant = 'horizontal',
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
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
