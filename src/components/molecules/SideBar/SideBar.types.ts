import { Link } from '@molecules/NavList/NavList.types';
import React from 'react';

type SideBarProps = {
  title: string;
  loading?: boolean;
  list?: Link[];
} & Omit<React.HTMLProps<HTMLElement>, 'list'>;

export default SideBarProps;
