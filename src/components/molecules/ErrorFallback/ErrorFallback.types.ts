type ErrorFallbackProps = {
  error: string | number;
  message?: string;
  onRetry?: () => void;
};

export default ErrorFallbackProps;
