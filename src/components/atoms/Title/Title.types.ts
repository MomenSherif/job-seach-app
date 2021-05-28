type HeadingKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = {
  component: HeadingKeys;
  variant?: HeadingKeys;
} & React.HTMLProps<HTMLHeadingElement>;

export default TitleProps;
