import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 0 40px;
  max-width: 1000px;
`;

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <Root>
        <Container>
          <h1>{title}</h1>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </Root>
    );
  }
}

export default Page;
