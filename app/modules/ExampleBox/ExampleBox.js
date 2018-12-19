import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid, Icon, Text } from '../../components/core';

const Wrapper = styled(Grid)`
  min-width: 30rem;
  background-color: #ffffff;
  padding: 1.25rem;
  transition: 0.3s ease-in;

  &:hover {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled(Text.H3)`
  font-size: 1.25rem;
`;

const Box = styled(Grid)`
  margin-top: 2rem;
`;

const Footer = styled(Grid)`
  margin-top: 2rem;
  padding-top: 1rem;
`;

const CodeIcon = styled(Icon)`
  font-size: 1rem;
  cursor: pointer;
  color: #d9d9d9;

  &:hover {
    color: dodgerblue;
  }
`;

const ExampleBox = ({ className, children, title, ...otherProps }) => (
  <Wrapper col flex="auto" className={cn('p-2', className)} {...otherProps}>
    <Title>{title}</Title>
    <Box items="end">{children}</Box>
    <Footer justify="end">
      <CodeIcon icon="file-code" />
    </Footer>
  </Wrapper>
);

ExampleBox.displayName = 'ExampleBox';
ExampleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node,
};
ExampleBox.defaultProps = {};

export default ExampleBox;
