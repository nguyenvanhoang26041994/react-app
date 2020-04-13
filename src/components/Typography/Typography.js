import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTags = Object.freeze({
  h1: '--h1',
  h2: '--h2',
  h3: '--h3',
  h4: '--h4',
  div: '--div',
  p: '--p',
  span: '--span',
});

const fStyles = Object.freeze({
  italic: '--italic',
  oblique: '--oblique',
});

const mTDecoration = Object.freeze({
  strong: '--strong',
  underline: '--underline',
  lineTrough: '--lineTrough',
});

const lTags = Object.keys(mTags);
const lFStyles = Object.keys(fStyles);
const lTDecoration = Object.keys(mTDecoration);

const Typography = ({ children, className, disabled, ...otherProps }) => {
  const tag = useSemanticProp('tag', otherProps, lTags);
  const Component = tag || 'p'; // we only have support a valid HTML element tag.
                                // If not valid, the default tag is <p>.

  const lFStyle = useSemanticProp('fStyle', otherProps, lFStyles);
  const textDecoration = useSemanticProp(
    'mTDecoration',
    otherProps,
    lTDecoration
  );

  const passedProps = useMemo(
    () =>
      omit(otherProps, [
        ...lTags,
        ...lFStyles,
        ...lTDecoration
      ]),
    [otherProps]
  );

  return (
    <Component
      className={cn(
        'rc-typo',
        { '--disabled': disabled },
        mTags[tag],
        fStyles[lFStyle],
        mTDecoration[textDecoration],
        className
      )}
      {...passedProps}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typo';
Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
Typography.defaultProps = {};

export default Typography;
