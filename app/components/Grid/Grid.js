/* Grid using tailwindcss */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// import '../style/utilities/flexbox';
// import '../style/utilities/spacing.css';
// import '../style/utilities/sizing/width.scss';
import './style/Grid.scss';

export const getDirection = ({ row, col, reverse }) => {
  if (!row && !col) {
    return '';
  }

  return 'flex-'
    .concat(row ? 'row' : '')
    .concat(col ? 'col' : '')
    .concat(reverse ? '-reverse' : '');
};

export const justifys = Object.freeze({
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
});
export const listItems = Object.freeze({
  stretch: 'items-stretch',
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
});
export const wraps = Object.freeze({
  [true]: 'flex-wrap',
  [false]: 'flex-no-wrap',
  reverse: 'flex-wrap-reverse',
});
export const grows = Object.freeze({
  [true]: 'flex-grow',
  [false]: 'flex-no-grow',
});
export const shrinks = Object.freeze({
  [true]: 'flex-shrink',
  [false]: 'flex-no-shrink',
});
export const flexs = Object.freeze({
  initial: 'flex-initial',
  1: 'flex-1',
  auto: 'flex-auto',
  none: 'flex-none',
});
export const contents = Object.freeze({
  start: 'content-start',
  center: 'content-center',
  end: 'content-end',
  between: 'content-between',
  around: 'content-around',
});
export const selfs = Object.freeze({
  auto: 'self-auto',
  start: 'self-start',
  center: 'self-center',
  end: 'self-end',
  stretch: 'self-stretch',
});
export const margins = Object.freeze({
  0: 'm-0',
  1: 'm-1',
  2: 'm-2',
  3: 'm-3',
  4: 'm-4',
  5: 'm-5',
  6: 'm-6',
  7: 'm-7',
  8: 'm-8',
});
export const spans = Object.freeze({
  '1/2': 'w-1/2',
  '6/12': 'w-6/12',
  '1/3': 'w-1/3',
  '4/12': 'w-4/12',
  '2/3': 'w-2/3',
  '8/12': 'w-8/12',
  '1/4': 'w-1/4',
  '3/12': 'w-3/12',
  '3/4': 'w-3/4',
  '9/12': 'w-9/12',
  '1/5': 'w-1/5',
  '2/5': 'w-2/5',
  '3/5': 'w-3/5',
  '4/5': 'w-4/5',
  '1/6': 'w-1/6',
  '2/12': 'w-2/12',
  '5/6': 'w-5/6',
  '10/12': 'w-10/12',
  '1/12': 'w-1/12',
  '5/12': 'w-5/12',
  '7/12': 'w-7/12',
  '11/12': 'w-11/12',
  '12/12': 'w-12/12',
  full: 'w-full',
});

export const getResponsiveAll = ({ sm, md, lg, xl }) =>
  cn(
    getResponsive(sm, 'sm:'),
    getResponsive(md, 'md:'),
    getResponsive(lg, 'lg:'),
    getResponsive(xl, 'xl:'),
  );

export const getResponsive = (
  {
    row,
    col,
    reverse,
    justify,
    items,
    content,
    self,
    wrap,
    nowrap,
    grow,
    noGrow,
    shrink,
    noShrink,
    flex,
    span,
  },
  query,
) => {
  const directionClass = getDirection({ row, col, reverse });

  return cn(
    directionClass ? `${query}${directionClass}` : null,
    justifys[justify] ? `${query}${justifys[justify]}` : null,
    listItems[items] ? `${query}${listItems[items]}` : null,
    contents[content] ? `${query}${contents[content]}` : null,
    selfs[self] ? `${query}${selfs[self]}` : null,
    flexs[flex] ? `${query}${flexs[flex]}` : null,
    spans[span] ? `${query}${spans[span]}` : null,
    {
      [wraps.true]: wrap === true ? `${query}${wraps.true}` : null,
      [wraps.false]: nowrap === true ? `${query}${wraps.false}` : null,
      [wraps.reverse]: wrap === 'reverse' ? `${query}${wraps.reverse}` : null,
      [grows.true]: grow === true ? `${query}${grows.true}` : null,
      [grows.false]: noGrow === true ? `${query}${grows.false}` : null,
      [shrinks.true]: shrink === true ? `${query}${shrinks.true}` : null,
      [shrinks.false]: noShrink === true ? `${query}${shrinks.false}` : null,
    },
  );
};

const Grid = ({
  className,
  row,
  col,
  reverse,
  justify,
  items,
  content,
  self,
  wrap,
  nowrap,
  grow,
  noGrow,
  margin,
  shrink,
  noShrink,
  flex,
  span,
  sm,
  md,
  lg,
  xl,
  ...otherProps
}) => (
  <div
    {...otherProps}
    className={cn(
      'flex',
      getDirection({ row, col, reverse }),
      justifys[justify],
      listItems[items],
      contents[content],
      selfs[self],
      flexs[flex],
      margins[margin],
      spans[span],
      getResponsiveAll({ sm, md, lg, xl }),
      {
        [wraps.true]: wrap === true,
        [wraps.false]: nowrap === true,
        [wraps.reverse]: wrap === 'reverse',
        [grows.true]: grow === true,
        [grows.false]: noGrow === true,
        [shrinks.true]: shrink === true,
        [shrinks.false]: noShrink === true,
      },
      className,
    )}
  />
);

const responsivePropTypes = Object.freeze({
  row: PropTypes.bool,
  col: PropTypes.bool,
  reverse: PropTypes.bool,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  wrap: PropTypes.oneOf([true, false, 'reverse']),
  content: PropTypes.oneOf(Object.keys(contents)),
  self: PropTypes.oneOf(Object.keys(selfs)),
  flex: PropTypes.oneOf(['initial', 'auto', 'none', '1', 1]),
  justify: PropTypes.oneOf(Object.keys(justifys)),
  items: PropTypes.oneOf(Object.keys(listItems)),
  span: PropTypes.oneOf(Object.keys(spans)),
});

Grid.displayName = 'Grid';
Grid.propTypes = {
  ...responsivePropTypes,
  className: PropTypes.string,
  children: PropTypes.node,
  margin: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]),
  sm: PropTypes.shape(responsivePropTypes),
  md: PropTypes.shape(responsivePropTypes),
  lg: PropTypes.shape(responsivePropTypes),
  xl: PropTypes.shape(responsivePropTypes),
};
Grid.defaultProps = {
  sm: {},
  md: {},
  lg: {},
  xl: {},
};

export default Grid;
