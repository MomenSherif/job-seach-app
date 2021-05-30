import Skeleton from 'react-loading-skeleton';

const TagsSkeleton: React.FC = (props) => (
  <>
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
    <Skeleton width={150} height={30} style={{ opacity: 0.2 }} />
  </>
);

export default TagsSkeleton;
