import React from 'react';

export default function repeatElement(
  length: number,
  jsx: React.ReactElement,
): React.ReactElement[] {
  return Array.from({ length }, (_, i) =>
    React.cloneElement(jsx, { key: String(i) }),
  );
}
