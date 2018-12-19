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
  > .__global-menu {
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

    > .__logo {
      height: ${styles['header-height']};
      min-height: ${styles['header-height']};
    }
  }

  .__main__global-header {
    height: ${styles['header-height']};
    padding: 0 1rem 0 ${styles['menu-width']};

    > .__bars {
      padding-left: calc(${styles['menu-width']} + 1rem);
    }
  }

  .__main__main-content {
    padding: 1rem 1rem 1rem calc(${styles['menu-width']} + 1rem);
  }
`;

export default class MainLayout extends React.Component {
  state = {};

  render() {
    return (
      <Wrapper row span="full">
        <GlobalMenu className="__global-menu" />
        <Grid col flex="auto">
          <GlobalHeader className="__main__global-header" />
          <MainContent className="__main__main-content" />
          <GlobalFooter />
        </Grid>
      </Wrapper>
    );
  }
}

MainLayout.propTypes = {};
MainLayout.defaultProps = {};
