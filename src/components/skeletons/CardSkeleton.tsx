import ContentLoader from 'react-content-loader';

const CardSkeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="250"
    viewBox="0 0 100% 100%"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="250" />
  </ContentLoader>
);

export default CardSkeleton;
