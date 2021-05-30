import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton: React.FC<React.ComponentProps<typeof Skeleton>> = (
  props,
) => <Skeleton width="100%" height={250} {...props} style={{ opacity: 0.2 }} />;

export default CardSkeleton;
