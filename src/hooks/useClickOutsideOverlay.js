import { useEffect, useRef } from 'react';

export default ({ overlayRef, open, handleClickOutside }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!overlayRef.current || overlayRef.current.contains(event.target)) {
        return;
      }
      handleClickOutside();
    };

    wrapperRef.current && wrapperRef.current.addEventListener('mousedown', listener);
    wrapperRef.current && wrapperRef.current.addEventListener('touchstart', listener);

    return () => {
      wrapperRef.current && wrapperRef.current.removeEventListener('mousedown', listener);
      wrapperRef.current && wrapperRef.current.removeEventListener('touchstart', listener);
    };
  }, [wrapperRef, overlayRef, open, handleClickOutside]);

  return wrapperRef;
}
