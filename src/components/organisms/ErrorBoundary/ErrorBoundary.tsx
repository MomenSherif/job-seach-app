import React, { ErrorInfo } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import Title from '@atoms/Title';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component<{}, { hasError: boolean; }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service

  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className={styles.container}>
        <FiAlertCircle size={80} />
        <Title component="h1">Oops..!</Title>
        <p>Something went wrong...</p>
        <button className={styles.button} onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }
}

export default ErrorBoundary;
