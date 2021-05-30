import { render, screen } from '@test-utils';
import Tag from './Tag';

describe('<Tag />', () => {
  it('Renders without error', () => {
    render(<Tag>Frontend Developer</Tag>);
  });

  it('Default variant value renders a contained tag', () => {
    const label = 'Frontend Developer';
    render(<Tag>{label}</Tag>);

    const tagEl = screen.getByText(label);
    expect(tagEl).toBeInTheDocument();
    expect(tagEl).toHaveClass('contained');
  });

  it('Applies text tag styles for "variant" prop as text', () => {
    const label = 'Frontend Developer';
    render(<Tag variant="text">{label}</Tag>);

    const tagEl = screen.getByText(label);
    expect(tagEl).toBeInTheDocument();
    expect(tagEl).toHaveClass('text');
  });
});
