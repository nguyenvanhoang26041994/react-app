import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid } from '../../components/core';
import GlobalMenu from '../GlobalMenu';
import GlobalHeader from '../GlobalHeader';
// import GlobalFooter from '../GlobalFooter';
import MainContent from '../MainContent';

const styles = {
  'menu-width': '17rem',
  'header-height': '5rem',
};

const Wrapper = styled(Grid)`
  > .__global-menu {
    min-width: ${styles['menu-width']};
    width: ${styles['menu-width']};
    z-index: 1;

    > .__logo {
      height: ${styles['header-height']};
      min-height: ${styles['header-height']};
    }
  }

  .__main__global-header {
    height: ${styles['header-height']};
    padding: 0 1rem;

    > .__bars {
      padding-left: 1rem;
    }
  }

  .__main__main-content {
    padding: 1rem;
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
          {/* <GlobalFooter /> */}
        </Grid>
      </Wrapper>
    );
  }
}

MainLayout.propTypes = {};
MainLayout.defaultProps = {};
