import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Spacer = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;

const Root = styled.div`
  float: right;
  margin: 6px 0 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  font-size: 1.125em;
  padding: 3px 8px;
  text-decoration: none;

  &,
  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HighlightedNavLink = styled(NavLink)`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  color: #fff;
  margin-right: 8px;
  margin-left: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Root role="navigation">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Spacer> | </Spacer>
        <NavLink to="/login">Log in</NavLink>
        <Spacer>or</Spacer>
        <HighlightedNavLink to="/register">Sign up</HighlightedNavLink>
      </Root>
    );
  }
}

export default Navigation;
