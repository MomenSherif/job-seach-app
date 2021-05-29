import { Link } from '@molecules/NavList/NavList.types';

type SideBarProps = {
  title: string;
  loading: boolean;
  list?: Link[];
};

export default SideBarProps;
