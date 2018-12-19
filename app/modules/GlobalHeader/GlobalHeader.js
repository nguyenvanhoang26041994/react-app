import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import { Grid, Avatar, Icon } from '../../components/core';

const Wapper = styled(Grid)`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1;

  .global-header__bars {
    font-size: 1.35rem;
    position: absolute;
    left: 0;
    cursor: pointer;
  }
`;

export default class GlobalHeader extends React.Component {
  state = {};

  render() {
    const { className } = this.props;

    return (
      <Wapper
        row
        span="full"
        items="center"
        justify="end"
        className={cn('global-header', className)}
      >
        <Icon icon="bars" className="global-header__bars" />
        <Avatar
          size="large"
          src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
          name="Hoang"
        />
      </Wapper>
    );
  }
}
GlobalHeader.propTypes = {
  className: PropTypes.string,
};
GlobalHeader.defaultProps = {};
