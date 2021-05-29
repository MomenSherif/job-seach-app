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
        {list.map((props, i) => (
          <li key={String(i)}>
            <NavLink {...props}>{props.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
