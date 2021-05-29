import LayoutProps from './Layout.types';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div
      className={`${styles.container} ${sidebar ? styles['multi-column'] : ''}`}
    >
      <main>{children}</main>
      {sidebar}
    </div>
  );
};

export default Layout;
