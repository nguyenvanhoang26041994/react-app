import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid } from '../../components/core';
import GlobalMenu from '../GlobalMenu';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';
import MainContent from '../MainContent';

const styles = {
  'menu-width': '17rem',
  'header-height': '5rem',
};

const Wrapper = styled(Grid)`
  .main-layout__global-menu {
    min-width: ${styles['menu-width']};
    width: ${styles['menu-width']};
    z-index: 2;
    position: fixed;
    max-height: 100vh;
    height: 100vh;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .global-menu__logo {
    height: ${styles['header-height']};
    min-height: ${styles['header-height']};
  }

  .main-layout__global-header {
    height: ${styles['header-height']};
    padding: 0 1rem 0 ${styles['menu-width']};

    .global-header__bars {
      padding-left: calc(${styles['menu-width']} + 1rem);
    }
  }

  .main-layout__content {
    padding: 1rem 1rem 1rem calc(${styles['menu-width']} + 1rem);
  }
`;

export default class MainLayout extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper row span="full" className="main-layout">
        <GlobalMenu className="main-layout__global-menu" />
        <Grid col flex="auto">
          <GlobalHeader className="main-layout__global-header" />
          <MainContent className="main-layout__content" />
          <GlobalFooter />
        </Grid>
      </Wrapper>
    );
  }
}

MainLayout.propTypes = {};
MainLayout.defaultProps = {};
