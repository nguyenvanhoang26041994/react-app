import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Popover from '../Popover';
import Portal from '../Portal';
import Dialog from '../Dialog';
import Button from '../Button';
import getPosition from '../../utils/getPosition';

const Guide = ({
  children,
  padding,
  body,
  handleNextGuide,
  handlePrevGuide,
  idx,
  total,
  title,
  content,
  ...otherProps
}) => {
  const [spotlightPos, setSpotlightPosition] = useState({});
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const _setSpotlight = ({ pageX, pageY, clientHeight, clientWidth }) =>
    setSpotlightPosition({
      top: pageY - padding,
      left: pageX - padding,
      width: clientWidth + 2 * padding,
      height: clientHeight + 2 * padding
    });

  const onClose = useCallback(() => setIsVisible(false), []);

  const handleNext = useCallback(() => {
    onClose();
    handleNextGuide(idx);
  }, [idx]);

  const handleBack = useCallback(() => {
    onClose();
    handlePrevGuide(idx);
  }, [idx]);

  const handleSkip = useCallback(() => {
    onClose();
  }, []);

  useEffect(() => {
    const elem = document.querySelector(`[data-id=${otherProps['data-id']}]`);
    _setSpotlight(getPosition(elem));
  }, [otherProps['data-id']]);

  useEffect(() => {
    const { height } = body.getBoundingClientRect();
    setHeight(height);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, [idx]);

  return (
    <React.Fragment>
      {children}
      <Portal>
        <div
          className={cn('rc-guide', { '--open': isVisible })}
          style={{ height }}
        >
          {isVisible && (
            <Popover
              defaultVisible
              bottom
              overlay={
                <Dialog>
                  <Dialog.Header>{title}</Dialog.Header>
                  <Dialog.Body>{content}</Dialog.Body>
                  <Dialog.Footer className='flex justify-end'>
                    <Button glassed onClick={handleSkip}>
                      Skip
                    </Button>
                    <Button glassed onClick={handleBack} style={{ marginLeft: '0.5em' }}>
                      Back
                    </Button>
                    <Button glassed onClick={handleNext} style={{ marginLeft: '0.5em' }}>
                      {`Next ${idx + 1} / ${total}`}
                    </Button>
                  </Dialog.Footer>
                </Dialog>
              }
              {...otherProps}
            >
              <div className="rc-guide-spotlight" style={{ ...spotlightPos }} />
            </Popover>
          )}
        </div>
      </Portal>
    </React.Fragment>
  );
};

Guide.propTypes = {
  children: PropTypes.any,
  padding: PropTypes.number,
  body: PropTypes.any,
  handleNextGuide: PropTypes.func,
  handlePrevGuide: PropTypes.func,
  idx: PropTypes.number,
  total: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};
Guide.defaultProps = {
  padding: 5,
  body: document.body,
  handleNextGuide: f => f,
  handlePrevGuide: f => f,
};

export default Guide;
