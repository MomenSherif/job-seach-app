import React from 'react';

export interface Link {
  label: string;
  to: string;
}

type NavListProps = {
  variant?: 'horizontal' | 'vertical';
  list: Link[];
} & Omit<React.HTMLProps<HTMLUListElement>, 'list'>;

export default NavListProps;
