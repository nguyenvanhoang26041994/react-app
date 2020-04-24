import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mFontStyles = Object.freeze({
  italic: '--italic',
  oblique: '--oblique',
});

const mTextDecoration = Object.freeze({
  underline: '--underline',
  through: '--line-through',
});

const lTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'span'];
const lFontStyles = Object.keys(mFontStyles);
const lTextDecoration = Object.keys(mTextDecoration);

const Typography = ({ children, className, disabled, color, strong, ...otherProps }) => {
  const tag = useSemanticProp('tag', otherProps, lTags) || 'p';
  const fontStyle = useSemanticProp('fontStyle', otherProps, lFontStyles);
  const textDecoration = useSemanticProp('decoration', otherProps, lTextDecoration);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTags,
    ...lFontStyles,
    ...lTextDecoration,
    'decoration',
    'tag',
    'fontStyle',
  ]), [otherProps]);

  return React.createElement(
    tag,
    {
      style: {
        color: color,
      },
      className: cn(
        'rc-typo',
        {
          '--disabled': disabled,
          '--strong': strong,
        },
        mFontStyles[fontStyle],
        mTextDecoration[textDecoration],
        className
      ),
      ...passedProps
    },
    children
  );
};

Typography.displayName = 'Typo';
Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  decoration: PropTypes.string,
  underline: PropTypes.bool,
  through: PropTypes.bool,
  strong: PropTypes.bool,
  fontStyle: PropTypes.string,
  italic: PropTypes.bool,
  p: PropTypes.bool,
  tag: PropTypes.string,
  div: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  span: PropTypes.bool,
  oblique: PropTypes.bool,
  color: PropTypes.string,
};
Typography.defaultProps = {};

export default Typography;
