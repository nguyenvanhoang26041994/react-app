/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Checkbox from '../Checkbox';

import './style/Table.scss';
// import '../style/utilities/text-alignment.scss';
// import '../style/utilities/vertical-alignment.scss';

export const aligns = Object.freeze({
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
});

export const verticals = Object.freeze({
  middle: 'align-middle',
  top: 'align-top',
  bottom: 'align-bottom',
  baseline: 'align-baseline',
  'text-top': 'align-text-top',
  'text-bottom': 'align-text-bottom',
});

export const borders = Object.freeze({
  [true]: 'rc-table--bordered',
  vertical: 'rc-table--vertical',
  horizontal: 'rc-table--horizontal',
});

export default class Table extends React.Component {
  state = {};

  renderTableHead = () => {
    const { columns, selectable } = this.props;

    return (
      <tr>
        {selectable && (
          <td
            style={{
              width: '1em',
              padding: '1em',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <Checkbox />
          </td>
        )}
        {columns.map((col, idx) => (
          <td
            key={col.index || idx}
            className={cn(col.className, aligns[col.align])}
          >
            {col.title}
          </td>
        ))}
      </tr>
    );
  };

  renderTableBody = () => {
    const { columns, data, vertical, selectable } = this.props;

    return data.map((rowData, idxRow) => (
      <tr key={idxRow}>
        {selectable && (
          <td
            style={{
              padding: '1em',
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
          >
            <Checkbox />
          </td>
        )}
        {columns.map((col, idxCol) => (
          <td
            key={col.index || idxCol}
            style={col.style}
            className={cn(
              col.className,
              aligns[col.align],
              verticals[vertical],
            )}
          >
            {this.renderTD(col.render, rowData, idxRow, rowData[col.index])}
          </td>
        ))}
      </tr>
    ));
  };

  renderTD = (render, rowData, idxRow, value) => {
    if (typeof render === 'function') {
      return render(rowData, idxRow);
    }

    return value;
  };

  render() {
    const { className, bordered, loading } = this.props;

    return (
      <table
        className={cn(
          'rc-table',
          borders[bordered],
          { 'rc-table--loading': loading },
          className,
        )}
      >
        <thead>{this.renderTableHead()}</thead>
        <tbody>{this.renderTableBody()}</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      align: PropTypes.oneOf(['left', 'right', 'center']),
      className: PropTypes.string,
      index: PropTypes.string,
      render: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.array,
  // page: PropTypes.number,
  // pageSize: PropTypes.number,
  loading: PropTypes.bool,
  className: PropTypes.string,
  bordered: PropTypes.oneOf([true, 'vertical', 'horizontal']),
  selectable: PropTypes.bool,
  vertical: PropTypes.oneOf(['middle', 'top', 'bottom']),
};
Table.defaultProps = {
  data: [],
  // page: 1,
  // pageSize: 10000, // large enought
};
