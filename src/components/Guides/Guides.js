import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Guide from './Guide';

const Guides = ({ visible, children }) => {
  const [idx, setIdx] = useState(0);
  const [childrenVisible, setChildrenVisible] = useState(children[0]);

  const _handleNextGuide = useCallback(
    index => {
      if (index >= children.length - 1) {
        return;
      }

      setIdx(index + 1);
      setChildrenVisible(children[index + 1]);
    },
    [idx]
  );

  const _handlePrevGuide = useCallback(
    index => {
      if (index <= 0) {
        return;
      }

      setIdx(index - 1);
      setChildrenVisible(children[index - 1]);
    },
    [idx]
  );

  const total = useMemo(() => children.length, [children.length]);

  return (
    <>
      {visible
        ? React.cloneElement(childrenVisible, {
            handleNextGuide: _handleNextGuide,
            handlePrevGuide: _handlePrevGuide,
            idx: idx,
            total: total,
          })
        : null}
    </>
  );
};

Guides.Guide = Guide;

Guides.displayName = 'Guides';
Guides.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};
Guides.defaultProps = {};

export default Guides;
