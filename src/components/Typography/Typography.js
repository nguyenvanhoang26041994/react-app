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

const tDecoration = Object.freeze({
  strong: '--strong',
  underline: '--underline',
  lineTrough: '--lineTrough',
});

const Typography = ({ children, className, disabled, ...otherProps }) => {
  const tag = useSemanticProp('tag', otherProps, Object.keys(mTags));
  const Component = tag || 'p'; // we only have support a valid HTML element tag.
                                // If not valid, the default tag is <p>.

  const fStyle = useSemanticProp('fStyle', otherProps, Object.keys(fStyles));
  const textDecoration = useSemanticProp(
    'tDecoration',
    otherProps,
    Object.keys(tDecoration)
  );

  const passedProps = useMemo(
    () =>
      omit(otherProps, [
        ...Object.keys(mTags),
        ...Object.keys(fStyles),
        ...Object.keys(tDecoration)
      ]),
    [otherProps]
  );

  return (
    <Component
      className={cn(
        'rc-typo',
        { '--disabled': disabled },
        mTags[tag],
        fStyles[fStyle],
        tDecoration[textDecoration],
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
