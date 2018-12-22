import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import request from '../../utils/request';
import b64DecodeUnicode from '../../utils/b64DecodeUnicode';
import { Grid, Icon, Text, Alert } from '../../components/core';
import CodeGuide from '../CodeGuide';

const githubAPI =
  'https://api.github.com/repos/nguyenvanhoang26041994/react-components/contents';
const githubRepo =
  'https://github.com/nguyenvanhoang26041994/react-components/tree/master';

const Wrapper = styled(Grid)`
  min-width: 30rem;
  background-color: #ffffff;
  padding: 1.25rem;
  transition: 0.3s ease-in;

  &:hover {
    /* box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15); */
  }
`;

const Title = styled(Text.H3)`
  font-size: 1.25rem;
`;

const Box = styled(Grid)`
  margin-top: 1rem;
`;

const Footer = styled(Grid)`
  margin-top: 1rem;
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

class ExampleBox extends React.Component {
  state = { code: '', showCode: false };

  fetchCodeFromGithub = () => {
    request
      .get(`${githubAPI}/${this.props.link}`)
      .then(({ json }) => {
        localStorage.setItem(`rc_${this.props.link}`, json.content);
        this.setState({
          code: b64DecodeUnicode(localStorage.getItem(`rc_${this.props.link}`)),
        });
      })
      .catch(() =>
        Alert.error({
          message: 'Fetch code from github error',
          duration: 1000,
        }),
      );
  };

  getCodeFromBrowser = item => localStorage.getItem(`rc_${item}`);

  onShowCode = () => {
    if (this.state.code) {
      return this.setState(prevState => ({
        showCode: !prevState.showCode,
      }));
    }

    if (localStorage.getItem(`rc_${this.props.link}`)) {
      return this.setState(prevState => ({
        showCode: !prevState.showCode,
        code: b64DecodeUnicode(localStorage.getItem(`rc_${this.props.link}`)),
      }));
    }

    return this.setState(
      prevState => ({ showCode: !prevState.showCode }),
      this.fetchCodeFromGithub,
    );
  };

  render() {
    const {
      className,
      children,
      title,
      link,
      code,
      ...otherProps
    } = this.props;

    return (
      <Wrapper {...otherProps} col className={cn('p-2', className)}>
        <Title>{title}</Title>
        <Box col className="mb-8">
          {children && <div className="flex py-8">{children}</div>}
          {this.state.showCode && <CodeGuide code={this.state.code} />}
        </Box>
        <Footer justify="end">
          {link && (
            <a href={`#${githubRepo}/${link}`}>
              <CodeIcon icon="file-code" onClick={this.onShowCode} />
            </a>
          )}
        </Footer>
      </Wrapper>
    );
  }
}

ExampleBox.displayName = 'ExampleBox';
ExampleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node,
  link: PropTypes.string,
  code: PropTypes.string,
};
ExampleBox.defaultProps = {};

export default ExampleBox;
