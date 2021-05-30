import { render, screen } from '@test-utils';
import Container from './Container';

describe('<Container />', () => {
  it('Renders without error', () => {
    render(<Container />);
  });

  it('Applies specific container througth "as" props', () => {
    const containerOne = 'main';
    render(<Container as={containerOne} />);
    expect(screen.getByRole(containerOne)).toBeInTheDocument();
  });
});
