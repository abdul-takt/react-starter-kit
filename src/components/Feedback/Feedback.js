import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  background: #f5f5f5;
  color: #333;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 8px;
  max-width: 1000px;
  text-align: center;
  font-size: 1.5em; /* ~24px */
`;

const Link = styled.a`
  &,
  &:active,
  &:hover,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Spacer = styled.span`
  padding-right: 15px;
  padding-left: 15px;
`;

class Feedback extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <Link href="https://gitter.im/kriasoft/react-starter-kit">
            Ask a question
          </Link>
          <Spacer>|</Spacer>
          <Link href="https://github.com/kriasoft/react-starter-kit/issues/new">
            Report an issue
          </Link>
        </Container>
      </Root>
    );
  }
}

export default Feedback;
