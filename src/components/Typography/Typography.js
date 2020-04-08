import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Typography.scss');

const mTags = Object.freeze({
  h1: '--h1',
  h2: '--h2',
  h3: '--h3',
  h4: '--h4',
  div: '--div',
  p: '--p',
  span: '--span',
});

const mStyles = Object.freeze({
  disabled: '--disabled',
  underline: '--underline',
  lineTrough: '--lineTrough',
  strong: '--strong',
});

const mTypes = Object.freeze({
  info: '--info',
  success: '--success',
  error: '--error',
  warning: '--warning',
  code: '--code',
});

const Typography = ({ children, className, ...otherProps }) => {
  const tag = useSemanticProp('tag', otherProps, Object.keys(mTags));
  const Component = tag || 'h1'; // we only have support a valid HTML element tag.
                                // If not valid, the default tag is h1.

  const styles = useSemanticProp('styles', otherProps, Object.keys(mStyles));
  const type = useSemanticProp('type', otherProps, Object.keys(mTypes));

  const passedProps = useMemo(() => omit(otherProps, [
      ...Object.keys(mTags),
      ...Object.keys(mStyles),
      ...Object.keys(mTypes),
  ]), [otherProps]);

  return (
    <Component className={cn('rc-typography', mTags[tag], mStyles[styles], mTypes[type], className )} {...passedProps}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typo';
Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
Typography.defaultProps = {

};

export default Typography;
