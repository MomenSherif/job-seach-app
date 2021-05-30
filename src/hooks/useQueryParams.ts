import { useLocation } from 'react-router';

export default function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}
