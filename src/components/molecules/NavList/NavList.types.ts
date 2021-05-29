import React from 'react';

export interface Link {
  label: string;
  to: string;
}

type NavListProps = {
  variant?: 'horizontal' | 'vertical';
  list: Link[];
  activeClassName?: string;
} & Omit<React.HTMLProps<HTMLUListElement>, 'list'>;

export default NavListProps;
