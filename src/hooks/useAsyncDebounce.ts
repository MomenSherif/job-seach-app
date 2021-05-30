import React, { useEffect, useRef } from 'react';

interface Options {
  enabled: boolean;
}

export default function useAsyncDebounce(
  callback: () => void,
  milliseconds: number,
  deps: React.DependencyList = [],
  options: Options = { enabled: true },
) {
  const callbackRef = useRef<typeof callback>();
  callbackRef.current = callback;

  const { enabled } = options;
  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(callbackRef.current!, milliseconds);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, milliseconds]);
}
