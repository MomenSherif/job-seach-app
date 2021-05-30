import React, { useEffect } from 'react';

interface Options<T> {
  target: T;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export default function useIntersectionObserver<
  T extends React.MutableRefObject<HTMLElement | null>,
>({
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: Options<T>) {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        rootMargin,
        threshold,
      },
    );

    const el = target && target.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [enabled, rootMargin, threshold, target, onIntersect]);
}
