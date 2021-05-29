import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function useScrollResotration(): void {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
}
