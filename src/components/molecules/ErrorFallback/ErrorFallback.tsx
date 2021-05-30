import { VscError, VscSync } from 'react-icons/vsc';

import ErrorFallbackProps from './ErrorFallback.types';
import styles from './Errorfallback.module.scss';

const ErrorCodeMap: Record<string | number, string> = {
  404: 'No Result Found',
  500: 'Internal Server Error',
  NETWORK_ERROR: 'Network Error',
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  onRetry,
  error,
  message,
}) => {
  return (
    <div
      className={`${styles.container} ${
        error == 404 ? styles.info : styles.error
      }`}
    >
      <VscError className={styles.icon} size={50} />
      <p className={styles.message} role="alert">
        {message ?? ErrorCodeMap[error] ?? error}
      </p>
      {onRetry && (
        <button className={styles.button} onClick={onRetry}>
          <span>Retry</span>
          <VscSync />
        </button>
      )}
    </div>
  );
};

export default ErrorFallback;
