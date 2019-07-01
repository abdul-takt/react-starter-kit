import React from 'react';
import PropTypes from 'prop-types';

// external-global styles must be imported in your JS.
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default Layout;
