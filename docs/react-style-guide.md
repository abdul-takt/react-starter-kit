## React Style Guide

> This style guide comes as an addition to
> [Airbnb React/JSX Guide](https://github.com/airbnb/javascript/tree/master/react).
> Feel free to modify it to suit your project's needs.

### Table of Contents

- [Separate folder per UI component](#separate-folder-per-ui-component)
- [Prefer using functional components](#prefer-using-functional-components)
- [Use Styled-Components](#use-css-modules)
- [Use higher-order components](#use-higher-order-components)

### Separate folder per UI component

- Place each major UI component along with its resources in a separate folder\
  This will make it easier to find related resources for any particular UI element
  (CSS, images, unit tests, localization files etc.). Removing such components during
  refactorings should also be easy.
- Avoid having CSS, images and other resource files shared between multiple
  components.\
  This will make your code more maintainable, easy to refactor.
- ~~Add `package.json` file into each component's folder.\
  This will allow to easily reference such components from other places in your code.\
  Use `import Nav from '../Navigation'` instead of `import Nav from '../Navigation/Navigation.js'`~~

```
/components/Navigation/icon.svg
/components/Navigation/Navigation.js
/components/Navigation/Navigation.test.js
/components/Navigation/Navigation.helpers.js
```

For more information google for
[component-based UI development](https://google.com/search?q=component-based+ui+development).

### Prefer using functional components

- Prefer using stateless functional components whenever possible.\
  Components that don't use state are better to be written as simple pure functions.

```jsx
// Bad
class Navigation extends Component {
  static propTypes = { items: PropTypes.array.isRequired };
  render() {
    return <nav><ul>{this.props.items.map(x => <li>{x.text}</li>)}</ul></nav>;
  }
}

// Better
function Navigation({ items }) {
  return (
    <nav><ul>{items.map(x => <li>{x.text}</li>)}</ul></nav>;
  );
}
Navigation.propTypes = { items: PropTypes.array.isRequired };
```

### Use Styled-Components

- Use Styled-Components\
  This will allow using short CSS class names and at the same time avoid conflicts.
- Keep CSS simple and declarative. Avoid loops, mixins etc.

```jsx
// Navigation.js

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
```

### Use higher-order components

- Use higher-order components (HOC) to extend existing React components.\
  Here is an example:

```js
// withViewport.js
import React, { Component } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

function withViewport(ComposedComponent) {
  return class WithViewport extends Component {
    state = {
      viewport: canUseDOM
        ? { width: window.innerWidth, height: window.innerHeight }
        : { width: 1366, height: 768 }, // Default size for server-side rendering
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('orientationchange', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('orientationchange', this.handleResize);
    }

    handleResize = () => {
      let viewport = { width: window.innerWidth, height: window.innerHeight };
      if (
        this.state.viewport.width !== viewport.width ||
        this.state.viewport.height !== viewport.height
      ) {
        this.setState({ viewport });
      }
    };

    render() {
      return (
        <ComposedComponent {...this.props} viewport={this.state.viewport} />
      );
    }
  };
}

export default withViewport;
```

```js
// MyComponent.js
import React from 'react';
import withViewport from './withViewport';

class MyComponent {
  render() {
    let { width, height } = this.props.viewport;
    return <div>{`Viewport: ${width}x${height}`}</div>;
  }
}

export default withViewport(MyComponent);
```

**[⬆ back to top](#table-of-contents)**
