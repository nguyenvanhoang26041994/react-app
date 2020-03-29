import { useCallback, useState, useMemo } from 'react';

export default ({ total, pageSize, max, activePage }) => {
  const itemCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const [activeFlag, setActiveFlag] = useState(Math.ceil(activePage / max));
  const maxActiveFlag = useMemo(() => Math.ceil(itemCount / max), [itemCount, max]);

  const startIndex = useMemo(() => (activeFlag - 1) * max + 1, [activeFlag, activePage, max]);
  const endIndex = useMemo(() => {
    let end = (activeFlag - 1) * max + max;

    return itemCount < end ? itemCount : end;
  }, [activeFlag, activePage, max]);

  const onNextItems = useCallback(() => setActiveFlag(prev => {
    const nextState = prev + 1;
    return nextState > maxActiveFlag ? maxActiveFlag : nextState;
  }), [maxActiveFlag]);

  const onPrevItems = useCallback(() => setActiveFlag(prev => {
    const nextState = prev - 1;
    return nextState > 1 ? nextState : 1;
  }), []);

  return {
    itemCount,
    activeFlag,
    startIndex,
    endIndex,
    maxActiveFlag,
    onNextItems,
    onPrevItems,
  };
};
