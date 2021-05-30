import { render, screen } from '@test-utils';
import Title from './Title';

describe('<Title />', () => {
  it('Renders without error', () => {
    const label = 'Frontend Developer';
    render(<Title component="h1">{label}</Title>);
  });

  it('Renders the heading level same as "component" prop', () => {
    const label = 'Frontend Developer';
    render(<Title component="h3">{label}</Title>);

    expect(
      screen.getByRole('heading', { name: label, level: 3 }),
    ).toBeInTheDocument();
  });

  it('Applies heading class as component level if no "variant" props is provided', () => {
    const label = 'Frontend Developer';
    const headingLevel = 'h2';
    render(<Title component={headingLevel}>{label}</Title>);

    expect(screen.getByRole('heading', { name: label })).toHaveClass(
      headingLevel,
    );
  });

  it('Applies variant class if both "component" & "variant" props are provided', () => {
    const label = 'Frontend Developer';
    const variantLevel = 'h6';
    render(
      <Title component="h3" variant={variantLevel}>
        {label}
      </Title>,
    );

    expect(screen.getByRole('heading', { name: label, level: 3 })).toHaveClass(
      variantLevel,
    );
  });
});
