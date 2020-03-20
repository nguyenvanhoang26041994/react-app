import { useEffect } from 'react';

export default (when) => {
  useEffect(() => {
    if (when) {
      document.body.classList.add('overflow-hidden');

      return () => document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [when]);
}
