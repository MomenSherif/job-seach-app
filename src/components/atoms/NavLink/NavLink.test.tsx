import { render, screen } from '@test-utils';
import NavLink from './NavLink';

describe('<NavLink />', () => {
  it('Renders without error', () => {
    render(<NavLink to="/" />);
  });

  it('Renders the correct children & path', () => {
    const path = '/';
    const label = 'Home';
    render(<NavLink to={path}>{label}</NavLink>);

    const linkEl = screen.getByRole('link', { name: label });
    expect(linkEl).toBeInTheDocument();

    expect(linkEl).toHaveAttribute('href', '/');
  });
});
