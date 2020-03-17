import { useRef, useMemo } from 'react';

export default (parentRef) => {
  const ref = useRef();
  return useMemo(() => parentRef || ref, []);
};
