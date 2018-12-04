/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { isValid, calculatePage } from './utils';

import './style/Pagination.scss';

export default class Pagination extends React.PureComponent {
  isHasCurrent = 'current' in this.props;

  state = {
    current: this.isHasCurrent ? this.props.current : this.props.defaultCurrent,
    pageCount: calculatePage({
      total: this.props.total,
      pageSize: this.props.pageSize,
    }),
  };

  componentWillReceiveProps(nextProps) {
    const newState = {};
    newState.pageCount = calculatePage({
      total: nextProps.total,
      pageSize: nextProps.pageSize,
    });

    if (isValid({ pageCount: newState.pageCount, page: nextProps.current })) {
      newState.current = nextProps.current;
    }

    this.setState(newState);
  }

  handlePageChange = (event, current) => {
    const { pageCount } = this.state;

    if (!isValid({ pageCount, page: current })) {
      return false;
    }
    return this.props.onChange(event, { ...this.state, page: current });
  };

  prev = event => this.handlePageChange(event, this.state.current - 1);

  next = event => this.handlePageChange(event, this.state.current + 1);

  jumpNext = event =>
    this.handlePageChange(event, this.state.current + this.props.max);

  jumpPrev = event =>
    this.handlePageChange(event, this.state.current - this.props.max);

  isShowJumpPrev = () =>
    this.state.current - Math.floor(this.props.max / 2) > 3;

  isShowJumpNext = () => {
    const { max } = this.props;
    const { current, pageCount } = this.state;

    return current + Math.floor(max / 2) < pageCount - 2;
  };

  start = () => {
    const { max } = this.props;
    const { current, pageCount } = this.state;

    let start = current - Math.floor(max / 2);

    if (start <= 3) {
      return 2;
    }
    if (start > pageCount - max) {
      start = pageCount - max + 1;
    }

    return start;
  };

  end = () => {
    const { max } = this.props;
    const { current, pageCount } = this.state;

    let end = current + Math.floor(max / 2);

    if (end >= pageCount - 2) {
      end = pageCount - 1;
    }

    if (end < max + 1 && max < pageCount - 2) {
      end = max;
    }

    return end;
  };

  renderItems = () => {
    const { max } = this.props;
    const { pageCount } = this.state;

    if (!pageCount) {
      return [];
    }

    if (pageCount <= max + 2) {
      const items = [];
      for (let i = 1; i <= pageCount; i += 1) {
        items.push(i);
      }

      return items;
    }

    // adding the first page
    const items = [1];

    if (this.isShowJumpPrev()) {
      // adding jumpPrev
      items.push('jumpPrev');
    }

    const start = this.start();
    const end = this.end();

    // adding more page
    for (let i = start; i <= end; i += 1) {
      items.push(i);
    }

    if (this.isShowJumpNext()) {
      // adding jumpNext
      items.push('jumpNext');
    }

    // adding the last page
    items.push(pageCount);

    return items;
  };

  render() {
    const { current, pageCount } = this.state;
    const { renderItem, className } = this.props;

    const prevDisabled = current <= 1 || current > pageCount;
    const nextDisabled = current >= pageCount || current < 1;

    const items = this.renderItems();

    return (
      <ul className={cn('rc-pagination', className)}>
        <li
          className={cn('rc-pagination__item rc-pagination__item--prev', {
            'rc-pagination__item--prev-disabled': prevDisabled,
          })}
          onClick={this.prev}
        >
          <span>Prev</span>
        </li>
        {items.map(item => {
          const itemProps = {
            key: item,
            className: cn(`rc-pagination__item rc-pagination__item--${item}`, {
              'rc-pagination__item--active': current === item,
            }),
            onClick: event => this.handlePageChange(event, item),
            children: renderItem(item),
          };

          if (item === 'jumpPrev' || item === 'jumpNext') {
            itemProps.onClick = this[item];
            itemProps.children = <span />;
          }

          return <li {...itemProps} />;
        })}
        <li
          className={cn('rc-pagination__item rc-pagination__item--next', {
            'rc-pagination__item--next-disabled': nextDisabled,
          })}
          onClick={this.next}
        >
          <span>Next</span>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  renderItem: PropTypes.func,
  current: PropTypes.number,
  defaultCurrent: PropTypes.number,
  pageSize: PropTypes.number,
  defaultPageSize: PropTypes.number,
  total: PropTypes.number,
  max: PropTypes.oneOf([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]),
  onChange: PropTypes.func,
};
Pagination.defaultProps = {
  defaultCurrent: 1,
  pageSize: 10,
  total: 0,
  max: 5,
  onChange: f => f,
  renderItem: i => <span>{i}</span>,
};
