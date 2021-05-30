import { render, screen, userEvent } from '@test-utils';
import ErrorFallback from './ErrorFallback';

describe('<ErrorFallback />', () => {
  it('Renders without error', () => {
    render(<ErrorFallback error={404} />);
  });

  it('Applies the correct error map message based on "error" code prop', () => {
    const { rerender } = render(<ErrorFallback error={404} />);
    expect(screen.getByRole('alert')).toHaveTextContent(/no result found/i);

    rerender(<ErrorFallback error={500} />);
    expect(screen.getByRole('alert')).toHaveTextContent(
      /internal server error/i,
    );

    rerender(<ErrorFallback error="NETWORK_ERROR" />);
    expect(screen.getByRole('alert')).toHaveTextContent(/network error/i);
  });

  it('Applies the "error" prop if not found in error map', () => {
    const error = 'OH NOICE ERROR';
    render(<ErrorFallback error={error} />);
    expect(screen.getByRole('alert')).toHaveTextContent(error);
  });

  it('Applies "message" prop if provided instead of "error" prop', () => {
    const messge = 'OH NOOOOO 😢';
    render(<ErrorFallback error={404} message={messge} />);
    expect(screen.getByRole('alert')).toHaveTextContent(messge);
  });

  it('Renders retry button if "onRetry" prop is proivded', () => {
    render(<ErrorFallback error={404} onRetry={() => {}} />);
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
  });

  it('Calls "onRetry" callback prop when retry button is clicked', () => {
    const mockFn = jest.fn();
    render(<ErrorFallback error={404} onRetry={mockFn} />);
    const retryButtonEl = screen.getByRole('button', { name: /retry/i });

    userEvent.click(retryButtonEl);
    expect(mockFn).toBeCalled();

    userEvent.click(retryButtonEl);
    userEvent.click(retryButtonEl);

    expect(mockFn).toBeCalledTimes(3);
  });
});
