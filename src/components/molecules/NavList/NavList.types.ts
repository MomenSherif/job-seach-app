import React from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface Link extends NavLinkProps {
  label: string;
  to: string;
}

type NavListProps = {
  variant?: 'horizontal' | 'vertical';
  list: Link[];
  activeClassName?: string;
} & Omit<React.HTMLProps<HTMLUListElement>, 'list'>;

export default NavListProps;
