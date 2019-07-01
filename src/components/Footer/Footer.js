import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Root = styled.div`
  background: #333;
  color: #fff;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  max-width: 1000px;
  text-align: center;
`;

const Text = styled.div`
  color: rgba(255, 255, 255, 0.5);
  padding: 2px 5px;
  font-size: 1em;
`;

const Spacer = styled.div`
  color: rgba(255, 255, 255, 0.3);
`;

const FooterLink = styled(Link)`
  padding: 2px 5px;
  font-size: 1em;

  &,
  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Root>
        <Container>
          <Text>© Your Company</Text>
          <Spacer>·</Spacer>
          <FooterLink to="/">Home</FooterLink>
          <Spacer>·</Spacer>
          <FooterLink to="/admin">Admin</FooterLink>
          <Spacer>·</Spacer>
          <FooterLink to="/privacy">Privacy</FooterLink>
          <Spacer>·</Spacer>
          <FooterLink to="/not-found">Not Found</FooterLink>
        </Container>
      </Root>
    );
  }
}

export default Footer;
