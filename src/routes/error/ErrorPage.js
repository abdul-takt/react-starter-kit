import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  h1 {
    font-weight: 400;
    color: #555;
  }

  pre {
    white-space: pre-wrap;
    text-align: left;
  }
`;

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    if (__DEV__ && this.props.error) {
      return (
        <ErrorContainer>
          <h1>{this.props.error.name}</h1>
          <pre>{this.props.error.stack}</pre>
        </ErrorContainer>
      );
    }

    return (
      <ErrorContainer>
        <h1>Error</h1>
        <p>Sorry, a critical error occurred on this page.</p>
      </ErrorContainer>
    );
  }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default ErrorPage;
