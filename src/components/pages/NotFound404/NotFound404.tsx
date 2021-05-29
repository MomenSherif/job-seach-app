import styles from './NotFound404.module.scss';

const NotFound404: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/404_animation.gif" alt="" />
    </div>
  );
};

export default NotFound404;
