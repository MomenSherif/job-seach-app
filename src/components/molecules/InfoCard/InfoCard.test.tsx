import { render, screen } from '@test-utils';
import InfoCard from './InfoCard';
import InfoCardProps from './InfroCard.type';

describe('<InfoCard />', () => {
  const tags: InfoCardProps['tags'] = [
    { label: 'HTML', value: 2 },
    { label: 'CSS', value: 3 },
    { label: 'Js', value: 4 },
  ];
  const title = 'Frontend Developer';
  const description = 'Painter LOL 😂';
  const to = '/skills/jset';

  it('Renders without error', () => {
    render(<InfoCard to={to} tags={tags} title={title} />);
  });

  it('Renders "description" if provided as prop', () => {
    const { rerender } = render(
      <InfoCard to={to} tags={tags} title={title} description={description} />,
    );
    expect(screen.getByText(description)).toBeInTheDocument();

    rerender(<InfoCard to={to} tags={tags} title={title} />);
    expect(screen.queryByText(description)).not.toBeInTheDocument();
  });

  it('Renders all "tags" from props correctly', () => {
    render(<InfoCard to={to} tags={tags} title={title} />);
    tags.forEach((tag) => {
      expect(screen.getByText(`${tag.label}:`)).toBeInTheDocument();
    });
  });
});
